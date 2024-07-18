/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accentureBlack: '#000000',
        accenturePurple: '#A100FF',
        accentureGray: '#2E2E2E', 
      },
      fontFamily: {
        arial: ["Arial"],
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],

    },
  }
  },
  plugins: [],
};
