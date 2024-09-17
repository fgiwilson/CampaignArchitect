/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens:{
      tablet: '960px',
      desktop: '1248px',
    },
    colors:{
        lightBlue:'#B8D8D8',
        cadetGray:'#7A9E9F',
        paynesGray: '#4F6367',
        beige:'#EEF5DB',
        bittersweet:'#FE5F55',
        flame:'#DC602E',
        lightGray: '#e9e9e9',
        medGray: '#CCCCCC',
        gray: '#A6A6A6',
        darkGray: '#878787',
        logoBeige: '#edce98'
    },
    extend: {},
  },
  plugins: [],
}

