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

- `ADMIN_PASSWORD`: bcrypt hash of the admin password.
- `SESSION_SECRET`: secret used to sign admin session tokens.
- `NEXT_PUBLIC_VERCEL_BLOB_URL`: public URL of the `announcements.json` blob.
- `BLOB_READ_WRITE_TOKEN`: Vercel Blob token used to update announcements.

The admin login is at `/admin/login`. Announcements require configured Vercel Blob storage.

## Checks and production

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```
