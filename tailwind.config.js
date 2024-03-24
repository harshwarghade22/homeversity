/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {

      colors: {
        customGray: '#D9D9D9',
        textGray: '#A9A9A9',
        iconsWhite: '#F3F5F7',
        borderGray: '#9B9B9B',
        borderGray2: '#B3B3B3',
        borderGray3 : '#BBBBBB',
        borderblack: '#262626',
        iconborder: '#434343'
      },
      fontFamily:{
        gilroy_bold:["gilroy-bold","sans-serif"],
        gilroy_semi_bold:["gilroy-semi-bold","sans-serif"],
        gilroy_medium:["gilroy-medium","sans-serif"],
        gilroy_regular:["gilroy-regular","sans-serif"],
        gilroy_light:["gilroy-light","sans-serif"],
        gilroy_thin:["gilroy-thin","sans-serif"]
      }
    },
  plugins: [],
},
}