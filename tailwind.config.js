/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx, ts, tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'crema-suave': '#FDF6F0',
        'rosa-empolvado': '#E1C4B8',
        'tierra-rosada': '#B99B91',
        'rosa-button': '#B88D88',
      },
    },
  },
  plugins: [],
}
