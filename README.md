# Akatsuki Web

A hyper-minimalistic landing page for the Akatsuki iOS app — a single, elegant screen built with Next.js and infused with "crimson dawn minimalism."

## Features

- **Crimson Dawn Aesthetic**: A restrained palette with bold crimson accents
- **Instrument Serif Typography**: Custom typeface that mirrors the native app
- **Smooth Micro-animations**: Framer Motion drives the hero reveal and CTA
- **Dark Mode Friendly**: Respects the user’s system theme out of the box
- **Responsive Layout**: Looks sharp across desktop, tablet, and mobile

## Getting Started

### Prerequisites

- Node.js 18+ (or Bun 1.1+)

### Installation

```bash
git clone https://github.com/your-org/akatsuki-web.git
cd akatsuki-web
npm install
# or
bun install
```

### Development

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Production Build

```bash
npm run build
npm run start
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Typography**: Instrument Serif (local custom font)

## Project Structure

```
akatsuki-web/
├── app/
│   ├── fonts/          # Instrument Serif files
│   ├── globals.css     # Global theme and animation styles
│   ├── layout.tsx      # Root layout and font wiring
│   └── page.tsx        # Landing page hero
├── public/             # Static assets (if any)
├── package.json
└── README.md
```

## Deploying

The app deploys cleanly to providers like Vercel or Netlify without extra configuration:

1. Push the repository to your Git host
2. Create a new project in your hosting provider
3. Use the default build command (`next build`) and output directory (`.next`)

No runtime environment variables are required.

## License

Private project for the Akatsuki todo app. Reach out to `sami@samihindi.com` for usage inquiries.
