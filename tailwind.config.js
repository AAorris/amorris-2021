module.exports = {
  purge: ["./components/**/*.{js,jsx}", "./pages/**/*.{jsx,js}"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
