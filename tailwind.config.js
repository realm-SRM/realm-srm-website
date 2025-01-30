/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif', ],
        belle: ["La Belle Aurore", "cursive"],
      },
      colors: {
        strokeColor: '#000',
        gradientStart: '#FFDCC1',
        gradientEnd: '#998474',
      },
      textStroke: {
        DEFAULT: '3px',
        sm: '0.5px',
        md: '1.5px',
        lg: '2px',
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(to right, #FFDCC1, #998474)',
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
        '.bg-clip-text': {
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-gradient': {
          'background-image': 'linear-gradient(to right, #FFDCC1, #998474)',
        },
      };
      addUtilities(newUtilities, {
        variants: ['responsive', 'hover'],
      });
    },
  ],
};
