# bowman11

A static-first yearly camping trip microsite for friends.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

Content lives in `src/content/`. RSVP and coordination stay external (Google Forms, Doodle, When2Meet, etc.).

## Commands

```bash
npm run dev    # local development
npm run build  # production build
npm run lint   # eslint
```

## Deploy (Vercel)

1. [Import the repo](https://vercel.com/new/clone?repository-url=https://github.com/xiggi/bowman11) on Vercel (project name: **bowman11**).
2. Framework preset: **Next.js** (auto-detected).
3. Production branch: **main**.
4. No environment variables required for v1.
5. Deploy.

No database, auth, or API routes in v1.
