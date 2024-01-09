/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust as needed for your file types
    './public/**/*.html',
  ],
  theme: {
    extend: {
      borderRadius: {
        radius: '.5rem',
      },
      scale: {
        102: '1.02',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
    },
  ],
};
