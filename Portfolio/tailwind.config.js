/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'greenHill1': '#a3ba97',
        'greenHill2': '#9cb591',
        'green-hover' : '#45754d',
      }
    },
  },
  plugins: [],
}

