/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Comfortaa", ...defaultTheme.fontFamily.sans],
    },
    extend: {
			backgroundImage: {
        'step-1': 
					"linear-gradient(to bottom, rgba(25, 25, 25, 0), rgba(25, 25, 25, 0), rgba(25, 25, 25, 1)), url('assets/step1pic.jpg')",
				'step-2': 
					"linear-gradient(to bottom, rgba(25, 25, 25, 0), rgba(25, 25, 25, 0), rgba(25, 25, 25, 1)), url('assets/step2pic.jpg')",
				'step-3': 
					"linear-gradient(to bottom, rgba(25, 25, 25, 0), rgba(25, 25, 25, 0), rgba(25, 25, 25, 1)), url('assets/step3pic.jpg')",
				'step-4': 
					"linear-gradient(to bottom, rgba(25, 25, 25, 0), rgba(25, 25, 25, 0), rgba(25, 25, 25, 1)), url('assets/step4pic.jpg')",
				'step-5': 
					"linear-gradient(to bottom, rgba(25, 25, 25, 0), rgba(25, 25, 25, 0), rgba(25, 25, 25, 1)), url('assets/step5pic.jpg')",
      },
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
