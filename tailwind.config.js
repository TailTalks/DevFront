/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
		screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
			'3xl': '2560px',
			'4xl': '3200px'
    },
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
				'orangeGradient':
					"linear-gradient(to bottom left, rgba(255, 174, 78, 1), rgba(255, 76, 140, 1))",
				'counterDog':
					"url('assets/counterDog.png')"
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
