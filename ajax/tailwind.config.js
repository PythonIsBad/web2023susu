/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./**.{html,js}"],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        green: '#30B030',
        salad: '#D0FF80',
        white: '#FFFFFF',
		
		darkGreen: '102010',
        gray: '#404040',
      }
    },
  },
  plugins: [],
}
