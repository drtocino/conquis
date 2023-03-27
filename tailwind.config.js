const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#d8c7af ',
          200: "#cbb595   ",
          300: "#b29060  ",
          400: "#9e7c4c ",
          500: "#846840 ",
          600: "#695333 ",
          700: "#4f3e26 ",
          800: "#342919 ",
          900: "#1a140c",
        }
      }
    },
  },
  plugins: [],
  darkMode: "class"
}