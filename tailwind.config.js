/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          cloister: "'Cloister Black', sans-serif",
          poppins: "'Poppins', sans-serif"
        }
    },
  },
  plugins: [],
}