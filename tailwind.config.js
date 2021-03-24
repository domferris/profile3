const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./src/**/*.js",
    "./src/**/*.pcss",
    "./src/**/**/*.pcss",
    "./src/**/*.liquid",
    "./src/**/**/*.html",
    "./src/*.html",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "true-gray": colors.trueGray,
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("tailwindcss-debug-screens"),
  ],
};
