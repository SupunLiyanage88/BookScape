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
    },
  },
  plugins: [],
}
