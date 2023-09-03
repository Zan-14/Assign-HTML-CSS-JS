/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}", "./**/main.js"],
    theme: {
      extend: {
        colors: {
            'blackSoft': '#0f0f0f',
            'grayLight': '#D9D9D9',
            'grayDarker': '#454B4E',
        },
        fontFamily: {
            'montserrat': ['Montserrat', 'sans-serif'],
            'titillium': ['Titillium', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }