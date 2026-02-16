# Valaskar

Official website for **Valaskar** — a decentralized virtual world of 10,000 independent lands, powered by blockchain, built around a flagship AAA survival game.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- Internationalization (9 languages: EN, DE, ES, FR, PT, RU, JA, ZH, KO)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
├── [locale]/        # Locale-based routing (landing + docs)
├── components/      # UI components (Hero, Tokenomics, Governance, etc.)
├── dictionaries/    # i18n JSON files
└── i18n/            # i18n config & dictionary loader
public/
├── fonts/
└── media/
```

## Scripts

| Command         | Description          |
| --------------- | -------------------- |
| `npm run dev`   | Start dev server     |
| `npm run build` | Production build     |
| `npm run start` | Start production server |
| `npm run lint`  | Run ESLint           |