/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pub/**/*.{html,js,css}"],
  theme: {
    screens: {
    'esm': '300px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  },
    extend: {},
  },
  plugins: [],
}

