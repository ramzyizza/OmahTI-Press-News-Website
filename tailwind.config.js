/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ['./public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'pf': ["Playfair Display"],
        'lato': ['Lato', 'sans-serif'],
      },
      colors:{
        'merah' : '#D23636',
        'krem' : '#F2F1F0',
        'item': '#2C2828',
        'lebih-item': '#1B1B1B',
        'dark-bg': '#292929',
      }
    },
    plugins: [],
  }
}
