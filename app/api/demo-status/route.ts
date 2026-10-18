import { projects } from '@/lib/portfolio';

function matchesSource(source: string, parent: URL, demo: URL): boolean {
  if (source === "'self'") return parent.origin === demo.origin;
  if (source === '*') return true;
  if (/^https?:$/.test(source)) return parent.protocol === source;
  if (source.startsWith("'")) return false;
  try {
    const allowed = new URL(source.includes('://') ? source : `${demo.protocol}//${source}`);
    const hostMatches = allowed.hostname.startsWith('*.')
      ? parent.hostname.endsWith(allowed.hostname.slice(1))
      : allowed.hostname === parent.hostname;
    return allowed.protocol === parent.protocol && hostMatches && (allowed.port === '*' || allowed.port === parent.port);
  } catch {
    return false;
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const project = projects.find(item => item.id === url.searchParams.get('project'));
  // Only fetch the two configured demo URLs, never a visitor-supplied destination.
  if (!project?.demo) return Response.json({ error: 'Demo not found' }, { status: 404 });

  try {
    const response = await fetch(project.demo, { method: 'HEAD', cache: 'no-store', redirect: 'follow', signal: AbortSignal.timeout(8000) });
    if (!response.ok) return Response.json({ status: 'unavailable' });
    const demo = new URL(response.url);
    const parent = new URL(process.env.NEXT_PUBLIC_SITE_URL || url.origin);
    const csp = response.headers.get('content-security-policy');
    const ancestorPolicies = (csp || '').split(',').flatMap(policy => policy.split(';').map(directive => directive.trim()).filter(directive => /^frame-ancestors(?:\s|$)/i.test(directive)));
    let blocked = false;
    if (ancestorPolicies.length) {
      blocked = ancestorPolicies.some(policy => !policy.split(/\s+/).slice(1).some(source => matchesSource(source, parent, demo)));
    } else {
      const frameOptions = response.headers.get('x-frame-options')?.trim().toUpperCase();
      blocked = Boolean(frameOptions && (frameOptions !== 'SAMEORIGIN' || parent.origin !== demo.origin));
    }
    return Response.json({ status: blocked ? 'blocked' : 'allowed' }, { headers: { 'Cache-Control': 'no-store' } });
  } catch {
    return Response.json({ status: 'unavailable' }, { headers: { 'Cache-Control': 'no-store' } });
  }
}
