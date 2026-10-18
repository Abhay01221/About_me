# Enable VoidStream inside the portfolio

The portfolio now opens live demos in its own preview dialog. Before loading a
frame, `/api/demo-status` checks the configured site's response headers. The
check runs again when the visitor clicks Reload or Try again.

VoidStream previously returned this enforced Content-Security-Policy directive:

```text
frame-ancestors 'self'
```

That allowed embedding only by VoidStream itself. The deployed policy now also
allows the two local portfolio origins below. The portfolio checks these headers
before loading the iframe and displays a fallback when a host blocks embedding.

## Deployed change in the VoidStream source

Repository: https://github.com/Abhay01221/VoidStream

The matching local checkout is `C:/Users/abhay/VoidStream`. Its
`security-policy.mjs` now contains an explicit `PORTFOLIO_ORIGINS` allowlist for
`http://localhost:3000` and `http://127.0.0.1:3000`. The generated `vercel.json`
uses the same policy after running `npm run security:sync`. Commit `170ca49`
was pushed to `main` and deployed successfully on Vercel on October 18, 2026.
The production response headers and the embedded demo were verified from
the local portfolio after deployment.

## Adding the deployed portfolio origin

Add the exact public portfolio origin to `PORTFOLIO_ORIGINS` in VoidStream's
`security-policy.mjs`, then run `npm run security:sync`. Do not edit only the
generated `vercel.json`, since the next sync would overwrite that change.

For local development:

```text
frame-ancestors 'self' http://localhost:3000 http://127.0.0.1:3000
```

For production, add the actual HTTPS origin where this portfolio is deployed.
For example, if it is hosted at `https://portfolio.example.com`, use:

```text
frame-ancestors 'self' https://portfolio.example.com
```

The example domain above is a placeholder. Do not deploy it unchanged. Use
specific origins rather than a wildcard. Ensure no other enforced CSP response
header still has a more restrictive `frame-ancestors` directive. A report-only
header does not grant embedding permission.

Redeploy VoidStream, then click Try again inside the portfolio preview. The
portfolio will load the live app automatically once the updated policy permits
its origin. Set `NEXT_PUBLIC_SITE_URL` to the portfolio's actual public origin
when deploying the portfolio; leave it unset for local development.

The preview supports desktop and mobile frame widths, refresh, fullscreen video,
and opening the source site separately. Authentication and playback may also
depend on the browser's third-party cookie policy and the providers' own
embedding settings. The portfolio does not change those providers' policies.

The VoidStream portfolio card now links to its provided GitHub repository.
