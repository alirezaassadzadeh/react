/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      "sans" : 'iranSans',
      "sansBold" : 'iranSansBold'
    },
    extend: {
      colors :{
        'trans' : "rgba(15, 23, 23, 0.49)"
      }
    },
  },
  plugins: [],
}
