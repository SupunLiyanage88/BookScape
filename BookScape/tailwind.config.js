// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        playwright: ['"Playwright Cuba"', 'sans-serif'],
      },
      colors: {
        'gray-custom': '#D9D9D9',
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out', // Set the wiggle animation to 2 seconds
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-15deg)',
          },
          '50%': {
            transform: 'rotate(15deg)',
          },
        },
      },
    },
  },
  plugins: [],
}
