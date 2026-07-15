# NORDBLADE

Premium knife manufacturing and brand growth portfolio site built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.

Not an ecommerce store — WhatsApp is the conversion path for launch, OEM/bulk, and brand growth.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local`:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=923240000002
```

Use digits only (country code + number, no `+` or spaces).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in project environment variables.
4. Deploy — no extra config required.

## Pages

- `/` — Home + hero blade-drop animation
- `/services` — Three paths overview
- `/launch-your-brand` — Brand launch journey
- `/oem-manufacturing` — Bulk / private label
- `/grow-your-brand` — Growth for struggling brands
- `/about` — Story & trust
- `/contact` — Contact + WhatsApp form

## Brand assets

- `public/brand/nordblade-logo.svg` — Full wordmark
- `public/brand/nordblade-mark.svg` — Knife mark
- `public/images/hero-knife.svg` — Animated hero blade
