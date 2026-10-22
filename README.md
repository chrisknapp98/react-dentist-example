# Zahnarztpraxis Dumbach website

Next.js App Router website for the practice in Pegnitz, with practice information, services, contact details, and an admin area for announcements. Uses system fonts, Tailwind CSS, and SVG icons loaded through SVGR.

## Local development

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Pages and API routes live in `src/app`; homepage sections live in `src/app/home` and shared components in `src/app/common`.

## Configuration

Set the following environment variables in `.env.local` (keep this file private):

- `BACKEND_API_URL`: backend server origin, e.g. `http://127.0.0.1:8000` locally. This is server-only; never prefix it with `NEXT_PUBLIC_`.
- `ALLOWED_DEV_ORIGINS`: optional comma-separated development hostnames/IPs (without scheme or port) for testing from other devices. Put local addresses in `.env.development.local`.

Start the Django backend with Docker Compose before running the frontend. Next.js proxies announcement and authentication requests to the backend, forwarding session/CSRF cookies. Vercel Blob and the old shared admin password are no longer used.

Log in at `/admin/login` using your **username** and password (a superuser or member of the `Practice editors` group). The technical maintainer creates editor accounts in Django admin, assigns them to `Practice editors`, and leaves Staff status unchecked. Superusers can use both interfaces.

The backend must trust the public frontend origin through `CSRF_TRUSTED_ORIGINS` (e.g. `https://your-domain.example`). Local Django DEBUG mode trusts `http://localhost:3000` and `http://127.0.0.1:3000`. Use HTTPS with secure cookies in production. Existing Blob announcements are not imported automatically.

## Checks and production

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```
