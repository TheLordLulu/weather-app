/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},

      screens: {

      '2xsm': '370px',
      // => @media (min-width: 375px) { ... } 
      'xsm': '480px',
      // => @media (min-width: 480px) { ... }
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }

      'xl': '2160px',
      // => @media (min-width: 2160px) { ... }
    },
  },
  plugins: [],
};
