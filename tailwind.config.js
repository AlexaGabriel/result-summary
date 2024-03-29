/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    colors: {
      bluep: "hsl(252, 100%, 67%)",
      bluepr: "hsl(241, 81%, 54%)",
      violetb: "hsla(256, 72%, 46%, 1)",
      persianb: "hsla(241, 72%, 46%, 0)",
      lired: "hsla(0, 100%, 67%, 0.1)",
      oryel: "hsla(39, 100%, 56%, 0.1)",
      grteal: "hsla(166, 100%, 37%, 0.1)",
      cobablue: "hsla(234, 85%, 45%, 0.1)",
      white: " hsl(0, 0%, 100%)",
      oryelp: "hsl(39, 100%, 56%)",
      grtealp: "hsl(166, 100%, 37%)",
      cobabluep: "hsl(234, 85%, 45%)",
      liredp: "hsl(0, 100%, 67%)",
      dark: "hsl(224, 30%, 27%)",
    },

    extend: {
      fontFamily: {
        Hanken: ['"Hanken Grotesk"'],
      },
    },
  },
  plugins: [],
};
