/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'preto': '#16161A',
      },
      backgroundImage: {
        'bg-main': "url('./src/img/pizza-backg.jpg')"
      }
    },
    fontFamily: {
      body: ['"Montserrat"']
    }
  },
  plugins: [],
}
