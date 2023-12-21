/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        title_color :'#666666',
        redd:'#ff0707',
        text_color:'#f0f0f0',
        body_color:'#010103',
      },
      fontFamily: {
        font: ['Raleway', 'sans-serif'],
      },
      container:{
        center:true,
        padding:"25px"
      },
    },
  },
  plugins: [],
}

