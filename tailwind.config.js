/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        main: '1400px'
      },
      colors: {
        'main-blue': '#071122',
        'main-light': '#F2D8BA',
        'main-gray': '#A0A7B1'
      }
    },
  },
  plugins: [],
}
