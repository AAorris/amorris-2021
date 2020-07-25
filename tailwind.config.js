module.exports = {
  purge: ["./components/**/*.css", "./components/**/*.jsx", "./pages/**/*.jsx"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
