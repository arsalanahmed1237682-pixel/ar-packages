/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kraft: {
          50: '#FBF9F5',
          100: '#F4EEE4',
          200: '#E7DCcb',
          300: '#D5C2A5',
          400: '#C5A070',
          500: '#AA8253',
          600: '#8E673C',
          700: '#724F2A',
          800: '#55391C',
          900: '#3A2511',
          950: '#231508',
        },
        charcoal: {
          50: '#F6F7F9',
          100: '#EBEDF2',
          200: '#D7DAE2',
          300: '#B3B9C7',
          400: '#8691A5',
          500: '#626F85',
          600: '#4B566A',
          700: '#3B4353',
          800: '#262C37',
          900: '#14181F',
          950: '#0B0D12',
        },
        accent: {
          amber: '#E58A1F',
          gold: '#F59E0B',
          copper: '#C25E00',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-plus-jakarta)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};