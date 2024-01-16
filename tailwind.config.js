/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
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
    },

    extend: {
      fontFamily: {
        Hanken: ['"Hanken Grotesk"'],
      },
    },
  },
  plugins: [],
};
