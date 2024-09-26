/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "fundoEstrada": "URL('../src/assets/fundo_estrada.webp')"
      }
    },
  },
  plugins: [],
}

