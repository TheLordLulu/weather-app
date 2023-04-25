/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},

      screens: {

      '2xsm': '360px',
      // => @media (min-width: 360px) { ... } 
      'xsm': '480px',
      // => @media (min-width: 480px) { ... }
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024x) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }

      'xl': '2160px',
      // => @media (min-width: 2160px) { ... }

      '2xl': '2560px',
      // => @media (min-width: 2560px) { ... }
    },
  },
  plugins: [],
};
