/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FCE7C6",
        secondary: {
          100: "#462E2C",
          500: "rgb(70,46,44,0.8)",
        },
        dimWhite: "#000",
        dimBlue: {
          100: "#D68576",
          500: "rgb(214,133,118,0.8)",

        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        concertOne: ["Concert One", "cursive"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
