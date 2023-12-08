/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
//  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
          bgLight: '#fefeff',
          bgDark: '#000',
          primaryClr: 'rgba(133, 78, 255, 1)',
          textClrLight: '#3E3E3E',
          textClrDark: ' rgba(255, 255, 255, 1)',
          bttnTxtClr: 'rgba(255, 255, 255, 1)',
          boxClrLight: 'rgba(255, 255, 255, 1)',
          boxClrDark: 'rgba(62, 62, 62, 1)',

      },
    },
  },
  plugins: [],
}

