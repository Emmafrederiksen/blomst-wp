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
      },

      fontSize: {
        // Kategori-label – lille og spredt
        'label':   ['clamp(0.75rem, 1vw, 0.8125rem)', { lineHeight: '1' }],
        // Brødtekst og beskrivelser
        'body-sm': ['clamp(0.8rem, 1.2vw, 0.875rem)', { lineHeight: '1.6' }],
        'body':    ['clamp(0.875rem, 1.5vw, 1rem)',    { lineHeight: '1.7' }],
        // Produktnavn og UI tekst
        'ui':      ['clamp(0.9rem, 1.5vw, 1rem)',      { lineHeight: '1.4' }],
        // Overskrifter
        'h3':      ['clamp(1rem, 1.8vw, 1.125rem)',    { lineHeight: '1.3' }],
        'h2':      ['clamp(1.5rem, 2.5vw, 1.875rem)', { lineHeight: '1.3' }],
        'h1':      ['clamp(1.75rem, 4vw, 2.5rem)',     { lineHeight: '1.2' }],
        // Hero overskrift – den store
        'hero':    ['clamp(2rem, 5vw, 3.5rem)',        { lineHeight: '1.1' }],
      },
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


/*
| TEKSTSTØRRELSER (responsive med clamp)
| text-label   → kategori-labels
| text-body-sm → beskrivelser og hjælpetekst  
| text-body    → brødtekst
| text-ui      → UI elementer og knapper
| text-h3      → produktnavne og kort-overskrifter
| text-h2      → sektion overskrifter
| text-h1      → side overskrifter
| text-hero    → hero overskrift (font-serif)
*/