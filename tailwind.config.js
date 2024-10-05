// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#A01586',
        secondary: '#eef6ff',
        lightsecondary:'#c585f82b',
        light2secondary:'#fdf9fc',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
}
