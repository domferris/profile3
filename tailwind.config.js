const colors = require("tailwindcss/colors");

module.exports = {
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
  purge: ["./src/**/*.js", "./src/**/*.html"],
};
