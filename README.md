# Bvetra Pro — Starter Project

This is a fully-featured Next.js + TypeScript starter scaffold tailored for Bvetra — premium transfers & car rentals.

## Features
- TypeScript, Tailwind-ready (add Tailwind via npm)
- AI Chat page (`/chat`) with server endpoint (uses `OPENAI_API_KEY` if provided)
- Order API (`/api/order`) integrates with file queue at `data/queue.json`
- Bitrix helper in `lib/bitrix.ts`
- Sentry placeholders and upload script
- Two themes: black-gold and gray-gold (use ThemeProvider)
- i18n locales (ru, en) configured in `next.config.js`
- Mobile navigation and responsive components
- Admin page to view queued orders (`/admin`)

## Images
46 images extracted from uploaded archive and placed in `public/images/`.

## Env variables
Create `.env.local` with at least:
```
OPENAI_API_KEY=
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
BITRIX_WEBHOOK_URL=
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_AUTH_TOKEN=
SENTRY_ORG=
SENTRY_PROJECT=
SENTRY_RELEASE=your-release-id
```

## How to run locally
1. `npm ci`
2. `npm run dev`

## Notes
This is a scaffold. Install Tailwind, ESLint, Prettier, and finish Sentry setup with `npx @sentry/wizard -i nextjs` before deploying to production.


## Upgrades applied
- Full TypeScript migration for API and app files (scaffold updated).
- OpenAI-based order parsing with a clear system prompt for accurate extraction.
- Bitrix helpers upgraded to create leads and deals; environment variable `BITRIX_DEAL_WEBHOOK` optional.
- Simple Admin auth: use `/api/admin/login` (POST {password}) to receive a JWT token. Set `ADMIN_PASS` and `ADMIN_JWT_SECRET` in `.env.local`.
- PWA: `public/manifest.json` and `public/sw.js` added. Service worker registers automatically.
- Push notifications: placeholder subscribe endpoint `/api/push-subscribe` that saves subscriptions to `data/push.json` (implement push server to send notifications).
- Framer Motion animations added to Navbar and MobileNav.
- Tailwind devDeps added; run `npx tailwindcss init -p` to finish styling setup.
- To deploy on Vercel: upload repo, set environment variables (OpenAI, Bitrix, Telegram, Sentry, Admin secrets).

## Notes about push & service workers on Vercel
- Sending push notifications requires a server to send Web Push (e.g., using `web-push` library).
- Service worker is minimal; extend it for caching strategies using Workbox or next-pwa plugin in build step.


## Premium UI Enhancements
- Parallax hero, fleet and pricing sections
- Animated buttons, contact FAB, glossy gradients and shimmer
- Full TypeScript conversion for files
