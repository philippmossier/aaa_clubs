module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },

      colors: {
        'custom-green': '#01C13B',
        'light-green': '#8CD87E',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
