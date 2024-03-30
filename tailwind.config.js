/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "#F8D1E0",
        peach: "#FE6784",
        peachStroke: "#FFAEBE",
        seagreen: "#25A3A1",
        seagreenStroke: "#A4FDFB",
        lightGrey: "#F7F9FE",
        greyStroke: "#CCCCCC",
        magenta: "#CD3F97",
        lightMagenta: "#ED75C0",
        darkMagenta: "#A52C7B",
      }
    },
  },
  plugins: [],
}

