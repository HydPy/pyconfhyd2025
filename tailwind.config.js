/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'selector', // Already correct
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffefdc',
          100: '#ffdbba',
          200: '#ffc797',
          300: '#ffb274',
          400: '#ff9e51',
          500: '#fa8624', // Base color
          600: '#c56a1c',
          700: '#904e15',
          800: '#5b310d',
          900: '#261906',
          950: '#120b03',
        },
        secondary: {
          50: '#d9fffe',
          100: '#b3eeed',
          200: '#8de3e2',
          300: '#67d9d8',
          400: '#40cecd',
          500: '#018b87', // Base color
          600: '#016e6b',
          700: '#01514f',
          800: '#013433',
          900: '#001817',
          950: '#000c0c',
        },
        background: {
          light: '#FFF8F3',
          dark: '#1A202C',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
