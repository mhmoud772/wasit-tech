/** @type {import('tailwindcss').Config} */
module.exports = {
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
          teal: "#1D7C8A",
          "teal-dark": "#145963",
          "teal-light": "#2BB3C7",
          navy: "#0B132B",
          "navy-light": "#151E33",
          "navy-dark": "#070C1B",
          gold: "#C5A059",
          "gold-light": "#D8B26B",
          "gold-dark": "#9A7A3B",
          gray: "#F8FAFC",
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
