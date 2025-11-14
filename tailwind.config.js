// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Great Vibes"', 'cursive'], // for a calligraphy-style logo
        sans: ['Inter', 'sans-serif'],      // default sans font for body text
      },
      colors: {
        primary: '#4f46e5', // example blue for gradients/buttons
        secondary: '#6366f1', 
      },
    },
  },
  plugins: [],
}


