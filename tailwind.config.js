/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#4E0C0C',  // bg-brand-primary / text-brand-primary
          white:   '#FFFFFF',  // text-brand-white
          dark:    '#222222',  // text-brand-dark
          muted:   '#888888',  // text-brand-muted
        }
      },
      borderRadius: {
        card: '12px',    // rounded-card
        pill: '9999px',  // rounded-pill
      },
      fontFamily: {
        sans:  ['var(--font-sans)', 'sans-serif'],   // font-sans → DM Sans
        serif: ['var(--font-serif)', 'serif'],        // font-serif → DM Serif Display
      }
    },
  },
  plugins: [],
}


/*
|--------------------------------------------------------------------------
| Tailwind cheatsheet — brandfarver og utilities
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
| bg-[var(--hero-gradient)] → gradient fra #C98086 til #FFFFFF
|                              bruges i: hero sektion
|
| BORDER RADIUS
| rounded-card          → 12px — bruges i: produktkort
| rounded-pill          → 9999px — bruges i: knapper, kategori-pills
|
*/