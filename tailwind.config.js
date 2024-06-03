/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Inter']
      },
      colors: {
        'bg-custom': '#13293D',
        'primary-custom': '#1B98E0',
        'secondary-custom': '#247BA0',
        'section-custom': '#006494',
        'footer-custom': '#0F2131',
        'text-custom': '#E8F1F2'

      }
    },
  },
  plugins: [],
}