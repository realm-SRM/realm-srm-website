/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      textStroke: { // Add custom text stroke utilities
        DEFAULT: '1px',
        sm: '0.5px',
        md: '1.5px',
        lg: '2px',
      },
      colors: {
        strokeColor: '#000', // Default stroke color
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '1px black',
        },
        '.text-stroke-sm': {
          '-webkit-text-stroke': '0.5px black',
        },
        '.text-stroke-md': {
          '-webkit-text-stroke': '1.5px black',
        },
        '.text-stroke-lg': {
          '-webkit-text-stroke': '2px black',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
