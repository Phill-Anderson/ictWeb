module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      'screen-xl': '1170px'
    },
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url('/images/header/main-pic.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
