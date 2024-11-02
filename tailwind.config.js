/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'rotate-slow': 'rotate 6s ease-in-out infinite',
      },
      keyframes: {
        rotate: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
        },
      },
    },
  },
  plugins: [],
};


