/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#1abc9c',
        'second-color': '#2c3e50',
      }
    },
  },
  plugins: [],
} 