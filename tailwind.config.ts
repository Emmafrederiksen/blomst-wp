import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#4E0C0C',
          white:   '#FFFFFF',
          dark:    '#222222',
          muted:   '#888888',
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #C98086, #FFFFFF)',
      },
      borderRadius: {
        card: '12px',
        pill: '9999px',
      }
    },
  },
  plugins: [],
}

export default config

/*
|--------------------------------------------------------------------------
| Tailwind cheatsheet – brandfarver og utilities
|--------------------------------------------------------------------------
|
| FARVER
| bg-brand-primary      → mørk bordeaux baggrund (#4E0C0C)
|                          bruges i: header, footer, primærknapper
| text-brand-primary    → mørk bordeaux tekst (#4E0C0C)
|                          bruges i: h1, h2, kategorier, sekundærknap border
| text-brand-white      → hvid tekst (#FFFFFF)
|                          bruges i: tekst på mørke baggrunde
| text-brand-dark       → næsten sort tekst (#222222)
|                          bruges i: brødtekst, produktnavne, priser
| text-brand-muted      → dæmpet grå tekst (#888888)
|                          bruges i: subtotal, leveringsomkostning, hjælpetekst
|
| BAGGRUNDE
| bg-hero-gradient      → gradient fra #C98086 til #FFFFFF (venstre → højre)
|                          bruges i: hero sektion, andre gradient sektioner
|
| BORDER RADIUS
| rounded-card          → 12px – bruges i: produktkort
| rounded-pill          → 9999px – bruges i: knapper, kategori-pills
|
*/