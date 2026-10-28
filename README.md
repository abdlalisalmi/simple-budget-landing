# SimpleBudget$ — landing page

Marketing site for the SimpleBudget$ app. Next.js (App Router) + Tailwind CSS v4, deployed on Vercel.
Independent of the Django backend: no API calls, no env vars, fully static.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (prerendered static)
npm run lint
```

## Structure

```
src/
  app/            layout (fonts, metadata, icon sprite), page, globals.css (tokens + animations)
  components/     one file per section: nav, hero, marquee (+ fact strip), how-it-works,
                  features, try-it (client), goals-trust, faq (client), cta-footer
  content/data.ts demo chats, ticker, FAQ copy, store links
  assets/         app screenshots (imported, so next/image knows their size)
```

- **Design tokens** live in `globals.css` under `@theme` (`bg-canvas`, `text-mint-text`, `font-display`, …).
- **Icons**: `components/icons.tsx` holds one SVG sprite; use `<Icon name="coffee" />`.
- **Animations** are CSS only (`globals.css`). Scroll reveals use `animation-timeline: view()` and
  degrade to "everything visible" in browsers without support. All motion is off under `prefers-reduced-motion`.
- Money on the page is always shown with exactly two decimals.

## Before launch

- [ ] Set real store URLs in `src/content/data.ts` (`STORE_LINKS`) and swap the drawn buttons in
      `cta-footer.tsx` for the official App Store / Google Play badges.
- [ ] Footer links (Privacy Policy, Terms, Delete Account, Contact) currently point at `#`. Add the pages;
      Google Play requires a public account-deletion request page.
- [ ] Add `metadata.openGraph` image and a favicon/app icon in `src/app`.
- [ ] Replace screenshots in `src/assets` as the app UI changes.

## Waitlist (Resend)

`POST /api/waitlist` adds the email to a Resend audience. Set these in Vercel
(Project Settings → Environment Variables) and in `.env.local` for local dev.
Never commit them.

| Variable | What |
| --- | --- |
| `RESEND_API_KEY` | Resend API key |
| `RESEND_AUDIENCE_ID` | ID of the audience that holds the waitlist |

Without them the endpoint answers 503 and the form shows an error.
