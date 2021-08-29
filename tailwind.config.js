module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    // setting variants here will remove the initial settings
    extend: {
      // it will extends from already existing variants properties
      backgroundColor: ['active'], // enable change background color on active
      fontSize: ['hover'], // enable change font size on hover
    },
  },
  plugins: [],
};
