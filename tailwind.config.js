module.exports = {
  content: [
    './src/**/*.{html,js,jsx}', // Add your paths here
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#FFC978',
        'dark-bg': '#181b23',
        'light-text': '#ABAEB7',
      },
      fontFamily: {
        'larken': ['Larken-Regular', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
