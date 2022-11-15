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
        'main-gray': '#A0A7B1',
        input: '#37455C',
        'transparent-blue': 'rgba(55, 69, 92, 0.75)'
      },
      backgroundImage: {
        'mind-game-background': "url('/src/img/mind-game-background.png')",
        
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}
