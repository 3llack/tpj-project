/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // for app directory
  ],
  theme: {
    extend: {
      keyframes: {
        slideUpDown: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(-100%)', opacity: '0' },
          '51%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-up-down': 'slideUpDown 0.6s ease-in-out',
      },
    },
  },
  plugins: [],
}
