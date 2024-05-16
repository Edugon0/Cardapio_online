/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"], // Qualquer arquivo da raiz vai poder usar a biblioteca tailwind
  theme: {
    extend: {
      backgroundImage:{
        "home": "url('/assets/bg.png')"
      }
    },
  },
  plugins: [],
}

