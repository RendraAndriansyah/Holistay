/ @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src//*.{html,js,jsx}"],
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
