import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-cairo)', 'var(--font-inter)', 'sans-serif'],
        sans: ['var(--font-inter)', 'var(--font-cairo)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        flutter: {
          blue: '#0468d7',
          cyan: '#27c6da',
          violet: '#7c5cfc',
        },
      },
    },
  },
  plugins: [],
};

export default config;
