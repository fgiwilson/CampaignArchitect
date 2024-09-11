/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens:{
      tablet: '960px',
      desktop: '1248px',
    },
    colors:{
        moss:'#8A9A5B',
        rust:'#CD7F32',
        
    },
    extend: {},
  },
  plugins: [],
}

