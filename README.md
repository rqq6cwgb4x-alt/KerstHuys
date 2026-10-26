# KerstHuys

Webshop voor kerstproducten. Op dit moment bestaat de site uit een
startpagina met header en footer; producten en bestellen volgen later.

## Stack

Next.js (App Router), TypeScript en Tailwind CSS, gemaakt voor Vercel.

## Lokaal draaien

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Omgevingsvariabelen

| Naam | Verplicht | Doel |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | nee | Volledige basis-URL van de site (bijv. het productiedomein), gebruikt voor `sitemap.xml`, `robots.txt` en Open Graph. Zonder deze waarde gebruikt de site `VERCEL_PROJECT_PRODUCTION_URL` (door Vercel gezet) of `http://localhost:3000`. |

## Placeholders

Contactgegevens staan in `lib/site.ts` als `[TODO: ...]` en moeten nog worden
ingevuld.

## Kleuren

Dieprood (`kerstrood`), donkergroen (`dennengroen`) en crème (`creme`), te
vinden in `app/globals.css`.
