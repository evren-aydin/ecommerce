/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      screens: {
        'md': {'max': '1600px'},
        'lm': {'max': '1000px'},
        'sm': {'max': '430px'},

      },
      fontFamily: {
      'mont': ["Montserrat","sans-serif" ],
      
    },
    },
  },
  plugins: [],
}

