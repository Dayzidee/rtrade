
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          success: '#00e676',
          danger: '#ff5252',
          surface: '#121212',
        }
      }
    },
  },
  plugins: [],
}
