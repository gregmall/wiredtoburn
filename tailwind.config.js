/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {},
      backgroundImage: {
        'header': "url('/assets/header.jpg')"
      }
    },
  },
  plugins: [],
}