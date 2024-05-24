/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "darkViolet" : "hsl(257, 27%, 26%)",
        "cyan" : "hsl(180, 66%, 49%)",
        "red": " hsl(0, 87%, 67%)",
        "gray" : "hsl(0, 0%, 75%)",
        "grayishViolet" : " hsl(257, 7%, 63%)",
        "veryDarkBlue" : "hsl(255, 11%, 22%)",
        "veryDarkViolet" : " hsl(260, 8%, 14%)",
      },
      translate: {
        '-1/2': '-50%',
      },

    },
  },
  plugins: [],
}