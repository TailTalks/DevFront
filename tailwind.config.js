/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Comfortaa", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        black: {
          50: "#191919",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
