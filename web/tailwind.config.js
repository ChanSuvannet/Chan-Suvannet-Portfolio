/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-600': {'max': '600px'},  // Custom breakpoint for max-width: 600px
        'max-980': {'min': '601px', 'max': '980px'},  // Custom breakpoint for max-width: 980px
      },
    },
  },
  plugins: [],
}

