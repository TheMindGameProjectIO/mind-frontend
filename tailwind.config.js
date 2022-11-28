/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:
      {
        '3xl': '0px 5px 5px rgba(189, 170, 147, 0.5)'
      },
      fontFamily: {
        'audiowide': "Audiowide",
        'play': "Play"
      },
      maxWidth: {
        main: '1400px'
      },
      colors: {
        'main-blue': '#071122',
        'main-light': '#F2D8BA',
        'main-gray': '#A0A7B1',
        'input': '#37455C',
        "little-white": "#CDD1D6",
        'almost-black': '#020914',
        'cr-gray': '#9DA3AD',
        'input': '#37455C',
        'placeholder-color': '#4d5667',
        'transparent-blue': 'rgba(55, 69, 92, 0.75)'
      },
      backgroundImage: {
        'mind-game-background': "url('/src/assets/img/mind-game-background.png')",
        'about-game-background': "url('/src/assets/img/aboutgamebg.svg')",
        'contact-us-background': "url('/src/assets/img/contactusbg.svg')",
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
