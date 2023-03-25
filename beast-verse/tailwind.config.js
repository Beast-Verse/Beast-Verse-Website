/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:theme=>(
        {
          'land-img':"url('../src/assets/island.jpg')"
        }
      ),
      dropShadow: {
        'blue': '0 10px 30px rgba(225, 248, 255, 0.5)',
        'orange': '0 10px 30px rgba(255, 244, 233, 0.5)',
        'green' : '0 10px 30px rgba(240, 255, 233, .5)',      
      },
      animation:{
        glow: 'glow 2s ease-in-out infinite',
        tilt: 'tilt 2s ease-in-out infinite',
        
      },
      keyframes:{
        glow: {
          '0%, 100%': { opacity: '50%'},
          '50%': { opacity: '100%' },
        },
        tilt:{
          "0%, 50%, 100%": {
            transform:"rotate(0deg)"
          },
          '0%, 100%': { opacity: '50%'},
          '50%': { opacity: '100%' },
          "25%": {
            transform:"rotate(0.5deg)"
          },
          "75%":{
            transform:"rotate(-0.5deg)"
          }
        }
      }
    },
    fontFamily: {
      Ruslan:['Ruslan Display', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}
