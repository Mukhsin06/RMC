module.exports = {
  content: [
    './src/**/*.{html,js,jsx}', 
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',  
        'md': '768px',   
        'lg': '1024px', 
        'xl': '1280px',  
        '2xl': '1536px', 
      },
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
