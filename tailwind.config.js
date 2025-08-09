/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1260px',
      },
    },
  },
  plugins: [],
}

