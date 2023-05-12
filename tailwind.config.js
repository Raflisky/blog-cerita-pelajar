const colors = require('tailwindcss/colors')

delete colors?.lightBlue
delete colors?.warmGray
delete colors?.trueGray
delete colors?.coolGray
delete colors?.blueGray

module.exports = {
  content: ['./src/**/*.{ts,tsx}', './src/pages/**/*.{ts,tsx}'],
  theme: {
    colors: {
      // You may customize your own custom color here
      primary: '#37E1A0',
      secondary: '#003366',
      tertiary: '#F8CA0F',
      light: '#EFEFEF',
      dark: '#313131',
      black: '#101928',
      white: '#fff',
      ...colors
    },
    extend: {
      fontFamily: {
        main: ['Space Grotesk', 'sans-serif']
      },
      // if add custom style save here
    }
  },
  plugins: []
}
