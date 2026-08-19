/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wasit: {
          // الألوان الرسمية من دليل الهوية البصرية
          teal: "#339999",        // PRIMARY COLOR
          "teal-dark": "#236B6B", // Darker teal derivative
          "teal-light": "#4db3b3",
          navy: "#1A1A2E",        // DARK NAVY
          "navy-light": "#252545",
          "navy-dark": "#121223",
          gold: "#C5B37C",        // OLIVE / GOLD
          "gold-light": "#d4c493",
          "gold-dark": "#9a8a55",
          gray: "var(--theme-text)",
        },
      },
      fontFamily: {
        arabic: ["'IBM Plex Sans Arabic'", "sans-serif"],
        english: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
