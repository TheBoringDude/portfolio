const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter", defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
