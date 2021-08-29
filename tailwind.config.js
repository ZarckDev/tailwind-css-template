module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#3fbaeb',
          DEFAULT: '#0fa9e6',
          dark: '#0c87b8',
        },
      },
      fontFamily: {
        headline: 'Poppins, sans-serif', // font-headline
      },
    },
  },
  variants: {
    // setting variants here will remove the initial settings
    extend: {
      // it will extends from already existing variants properties
      backgroundColor: ['active'], // enable change background color on active
    },
  },
  plugins: [],
};
