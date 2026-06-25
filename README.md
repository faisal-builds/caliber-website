# Aureon — Enterprise Edition (Next.js + Tailwind + Framer Motion)

The ultra-clean, dark luxury version. No 3D — the premium feel comes from
restraint: typography, spacing, subtle gradients, glassmorphism, and smooth
Framer Motion scroll animations. Inspired by Linear, Stripe, Vercel, Arc.

You run this exactly like the demo app you already got working.

---

## Run it on your laptop

### 1. Open a terminal in this folder
- **Windows:** open the `aureon-enterprise` folder → right-click inside → **Open in Terminal**
  (if you get a red "scripts disabled" error, use Command Prompt instead of PowerShell)

### 2. Install and run
```
npm install
npm run dev
```
Wait for the **Local: http://localhost:3000** line, then open that in your browser.

That's it. No API key needed — this is a marketing site, not the document tool.

---

## Put it online (free, ~2 minutes)

1. Push this folder to a GitHub repository (skip `node_modules` and `.next`).
2. Go to https://vercel.com, sign in with GitHub, import the repo, click **Deploy**.
3. You get a public link like `https://aureon.vercel.app`.

(Vercel makes Next.js sites; it's built by the same company.)

---

## Where to edit things

- **All the words** (headlines, prices, features) → `lib/content.js`. Change copy in
  one place and it updates everywhere.
- **Brand name & email** → top of `lib/content.js` (`brand` and `email`).
- **Colors** → `tailwind.config.js` (the `colors` block) and `app/globals.css`.
- **Individual sections** → the files in `components/` (Hero, Problem, Pricing, etc).

## What's inside

```
app/
  layout.jsx      fonts + SEO metadata
  page.jsx        assembles the sections
  globals.css     theme, gradients, glass utilities
components/        reusable building blocks
  Navbar, Hero, Problem, HowItWorks, Engine,
  Pricing, Security, CTA, Footer,
  Container, Reveal, Button, Eyebrow, SectionHeading
lib/content.js     all site copy
```

- **SEO:** title, description, keywords, Open Graph & Twitter cards are set in
  `app/layout.jsx`.
- **Performance:** fonts load via `next/font` (no layout shift), no heavy libraries,
  animations are GPU-friendly and respect "reduce motion" accessibility settings.
- **Responsive:** works on mobile and desktop out of the box.
