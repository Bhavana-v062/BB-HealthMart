/** @type {import('tailwindcss').Config} */
const tailwindScrollbar = require('tailwind-scrollbar');

module.exports = {
  content: [
    
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindScrollbar
  ],
}

