# T Triangle Limited website (Nuxt 3 + Tailwind)

    npm install
    npm run dev        # http://localhost:3000
    npm run generate   # static build

Content lives in `utils/site.ts`. Images go in `public/images/`, partner logos in `public/logos/`
(pass them to `<AppImage src="/images/xyz.jpg">`). Form handler: `server/api/enquiry.post.ts` (needs email sending added).

## AI chat
Copy `.env.example` to `.env`, set `NUXT_ANTHROPIC_API_KEY`. Key stays server-side (`server/api/chat.post.ts`).

## Ads
Set the ad/analytics IDs in `.env`. Tags load only after cookie consent. Send ad traffic to `/lp/quote?utm_source=google&utm_campaign=...`

## Enquiry emails
Set `NUXT_SMTP_*` and `NUXT_MAIL_TO` in `.env`. Submissions (with attachments up to 5 MB x3) are emailed via `server/api/enquiry.post.ts`
and the visitor is redirected to `/thank-you`, where the ad conversion fires.

## Ad landing pages
`/lp/quote` (general) and `/lp/<service-slug>` (one per service). Not indexed by search engines.
