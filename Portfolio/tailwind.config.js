/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ":/index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      keyframes:{
        'trans-top':{
          '0% , 100%':{transform:'translateY(10px)'},
          '50%':{transform:'translateY(0px)'}
        }
      },
     animation:{
      'trans-top':'trans-top 1.5s ease-in-out infinite'
     } 
    },
  },
  plugins: [],
}

