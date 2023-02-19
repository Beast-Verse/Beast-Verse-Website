/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      dropShadow: {
        'wxl': '0 30px 30px rgba(203, 213, 225, 0.8)',
        'pic': '0 30px 30px rgba(203, 213, 225, 0.3)',      
      }
    },
    fontFamily: {
      Ruslan:['Ruslan Display', 'sans-serif'],
      Monstserrat: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
