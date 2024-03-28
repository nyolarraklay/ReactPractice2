/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '20': '6rem',
      },
     screens: {
       '3xl': '1920px',
       '4xl': '2560px',
     },
    },
  },
  plugins: [],
}
