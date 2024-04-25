/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': {'max': '960px'},
        'lm': {'max': '700px'},
        'sm': {'max': '450px'},

      },
    },
  },
  plugins: [],
}

