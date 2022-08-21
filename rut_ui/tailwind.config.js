const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Lobster", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
