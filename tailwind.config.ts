import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        bbh: ['var(--font-bbh)', 'Georgia', 'serif'],
        raleway: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          dark:  '#0F0F0E',
          darker: '#0a0908',
          card:  '#141412',
          gold:  '#B8965A',
          cream: '#F5F2EE',
          'cream-dim': 'rgba(245,242,238,0.55)',
        },
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
export default config;
