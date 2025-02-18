// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     ":/index.html",
//     "./src/**/*.{html,js,ts,jsx,tsx}",

//   ],
//   theme: {
//     extend: {
//       keyframes:{
//         'trans-top':{
//           '0% , 100%':{transform:'translateY(10px)'},
//           '50%':{transform:'translateY(0px)'}
//         }
//       },
//      animation:{
//       'trans-top':'trans-top 1.5s ease-in-out infinite'
//           },
     
     
//     },
//   },
//   plugins: [],
// }

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add paths to your files
  ],
  theme: {
    extend: {

      keyframes: {
        'trans-top':{
          '0% , 100%':{transform:'translateY(10px)'},
          '50%':{transform:'translateY(0px)'}
        },
        'scroll-x': {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        'scroll-x': 'scroll-x 5s linear infinite', // Animation duration, timing, and loop
        'trans-top':'trans-top 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
