/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      dropShadow: {
        'blue': '0 10px 30px rgba(225, 248, 255, 0.5)',
        'orange': '0 10px 30px rgba(255, 244, 233, 0.5)',
        'green' : '0 10px 30px rgba(240, 255, 233, .5)',      
      },
    },
    fontFamily: {
      Ruslan:['Ruslan Display', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}
