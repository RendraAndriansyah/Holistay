/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'alta-dark': '#17345f',
      'alta-light': '#f4f7fb',
      'alta-white': '#ffffff',
    },
  },
  plugins: [require('daisyui')],
}
