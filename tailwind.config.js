/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      purple: '#F0D9FF',
      yellow: '#FFFDDE',
      gray: '#a3a2a2',
      white: '#fff',
      accent: '#873ea3',
      text: '#3b3a3a',
    },
    extend: {
      fontFamily: {
        titan: ['"Titan One"', 'cursive'],
        patrick: ['"Patrick Hand"', 'cursive'],
        actor: ['"Actor"', 'sans-serif'],
      },
      fontSize: {
        base: '20px',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s linear infinite',
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
    },
  },
  plugins: [],
};
