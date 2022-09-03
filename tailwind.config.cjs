/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'preto': '#16161A',
      }
    },
    fontFamily: {
      body: ['"Montserrat"']
    }
  },
  plugins: [],
}
