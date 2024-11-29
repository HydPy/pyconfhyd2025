/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        // The main brand color that defines the website’s identity. Headers, logos, and active navigation links.
        primary: {
          light: {
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
        },
        // Complements the primary color and provides contrast. Buttons, section backgrounds, and icons for variation.
        secondary: {
          light: {
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
        },
        // Draws immediate attention to important elements. Call-to-action (CTA) buttons, alerts, or promotional banners.
        accent: {
          light: {
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7',
            600: '#9333ea',
            700: '#7e22ce',
            800: '#6b21a8',
            900: '#581c87',
            950: '#3b0764',
          },
        },
        // The base color, creating a clean backdrop for content. Page background and alternating section colors for layout contrast
        background: {
          light: {
            50: '#fefce8',
            100: '#fef9c3',
            200: '#fef08a',
            300: '#fde047',
            400: '#facc15',
            500: '#eab308',
            600: '#ca8a04',
            700: '#a16207',
            800: '#854d0e',
            900: '#713f12',
            950: '#422006',
          },
        },
      },
    },
  },
  plugins: [],
};
