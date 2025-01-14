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
      colors: {
        strokeColor: '#000', 
      },
      textStroke: { 
        DEFAULT: '1px',
        sm: '0.5px',
        md: '1.5px',
        lg: '2px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '1px var(--tw-text-stroke-color, black)',
        },
        '.text-stroke-sm': {
          '-webkit-text-stroke': '0.5px var(--tw-text-stroke-color, black)',
        },
        '.text-stroke-md': {
          '-webkit-text-stroke': '1.5px var(--tw-text-stroke-color, black)',
        },
        '.text-stroke-lg': {
          '-webkit-text-stroke': '2px var(--tw-text-stroke-color, black)',
        },
      };
      addUtilities(newUtilities, {
        variants: ['responsive', 'hover'],
      });
    },
  ],
};
