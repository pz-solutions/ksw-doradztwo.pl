# ksw-doradztwo.pl

Strona internetowa biura rachunkowego KSW Doradztwo, zbudowana w Next.js z użyciem Pages Routera, Reacta, TypeScriptu i modułów CSS.

## Wymagania

- Node.js 24 LTS (wersja projektu znajduje się w `.nvmrc`)
- npm

## Uruchomienie lokalne

```bash
nvm use
npm install
npm run dev
```

Strona będzie dostępna pod adresem [http://localhost:3000](http://localhost:3000).

## Sprawdzanie zmian

```bash
npm run lint       # ESLint i reguły Next.js
npm run typecheck  # kontrola typów TypeScript
npm run build      # produkcyjny build Next.js
npm run check      # wszystkie powyższe kroki
```

## Struktura

- `pages/` – strony i trasy API
- `components/` – współdzielone komponenty React
- `styles/globals.css` – globalne style bazowe
- `styles/site.module.css` – design strony głównej i polityki prywatności
- `public/` – obrazy, fonty i pozostałe zasoby statyczne

Formularz kontaktowy korzysta z obsługi formularzy Netlify (`data-netlify`). Przy wdrożeniu na innej platformie wymaga własnego backendu lub zewnętrznej usługi formularzy.
