'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, LoaderCircle, Monitor, RotateCw, Smartphone, SquarePlay } from 'lucide-react';
import type { Project } from '@/lib/portfolio';

type Status = 'checking' | 'allowed' | 'blocked' | 'unavailable';

export default function DemoPreview({ project }: { project: Project }) {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [status, setStatus] = useState<Status>('checking');
  const [attempt, setAttempt] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [slow, setSlow] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    fetch(`/api/demo-status?project=${encodeURIComponent(project.id)}`, { signal: controller.signal, cache: 'no-store' })
      .then(async response => {
        if (!response.ok) throw new Error('Could not check demo');
        const data = await response.json();
        setStatus(data.status === 'allowed' || data.status === 'blocked' ? data.status : 'unavailable');
      })
      .catch(() => { if (!controller.signal.aborted) setStatus('unavailable'); })
      .finally(() => clearTimeout(timeout));
    const deadline = setTimeout(() => setStatus(current => current === 'checking' ? 'unavailable' : current), 12500);
    return () => { controller.abort(); clearTimeout(timeout); clearTimeout(deadline); };
  }, [project.id, attempt]);

  useEffect(() => {
    if (status !== 'allowed' || loaded) return;
    const timer = setTimeout(() => setSlow(true), 15000);
    return () => clearTimeout(timer);
  }, [status, loaded]);

  function retry() {
    setStatus('checking');
    setLoaded(false);
    setSlow(false);
    setAttempt(value => value + 1);
  }

  return <div className="demo-preview">
    <div className="demo-toolbar">
      <span className="demo-address"><span className="tiny-dot" />{new URL(project.demo!).hostname}</span>
      <div className="demo-controls">
        <div className="device-controls" role="group" aria-label="Preview size">
          <button aria-label="Desktop preview" aria-pressed={device === 'desktop'} onClick={() => setDevice('desktop')}><Monitor size={16} /></button>
          <button aria-label="Mobile preview" aria-pressed={device === 'mobile'} onClick={() => setDevice('mobile')}><Smartphone size={16} /></button>
        </div>
        <button className="demo-tool" onClick={retry} aria-label="Reload demo"><RotateCw size={15} /></button>
        <a className="demo-tool" href={project.demo!} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} separately`} title="Open separately"><ArrowUpRight size={16} /></a>
      </div>
    </div>
    <div className={`demo-stage ${device === 'mobile' ? 'mobile-preview' : ''}`}>
      {status === 'allowed' ? <>
        {!loaded && <div className="demo-loading" role="status"><LoaderCircle className="loading-spinner" size={21} /><span>Opening {project.name}…</span></div>}
        <iframe
          key={attempt}
          src={project.demo!}
          title={`${project.name} interactive live demo`}
          className="demo-frame"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"
          allow="fullscreen; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          onLoad={() => { setLoaded(true); setSlow(false); }}
        />
      </> : <div className="demo-empty" role="status">
        {status === 'checking' ? <><LoaderCircle className="loading-spinner" size={30} /><h3>Preparing your preview.</h3><p>Connecting to {project.name}…</p></> : <>
          <span className="glass-pill demo-empty-icon"><SquarePlay size={28} strokeWidth={1.25} /></span>
          <span className="eyebrow">{project.name} / LIVE DEMO</span>
          <h3>{status === 'blocked' ? 'This demo needs its own window.' : 'The demo is taking a moment.'}</h3>
          <p>{status === 'blocked' ? 'This site currently restricts embedded previews. You can explore the live app in a separate tab and return to the portfolio here.' : 'We couldn’t connect to the live app. Try again, or open the site directly.'}</p>
          <div className="demo-empty-actions"><button className="glass-pill button" onClick={retry}><RotateCw size={14} />Try again</button><a className="glass-pill button" href={project.demo!} target="_blank" rel="noopener noreferrer">Open live site <ArrowUpRight size={14} /></a></div>
        </>}
      </div>}
    </div>
    <div className="demo-footnote"><span className="tiny-dot" /><span>{slow ? 'Still loading? Try reloading or open the site separately.' : 'Explore the live app here. Close the preview to return to the portfolio.'}</span></div>
  </div>;
}
