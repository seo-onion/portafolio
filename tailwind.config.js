/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ajusta esto según tu estructura
  ],
  theme: {
    extend: {
      colors: {
        dark_primary_color: "#eec399",
        soft_primary_color: "#efe9d1",
        background_tv: "#ddc796",
        background: "#222035",
        text: "#3a3a58",
      },
      fontFamily: {
        press: ['"Press Start 2P"', 'system-ui', 'sans-serif'], // Fuente para textos pixelados
        gothic: ['"Gothic A1"', 'sans-serif'], // Fuente adicional
      },
    },
  },
  plugins: [],
};
