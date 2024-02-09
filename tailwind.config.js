/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      scale: {
        175: '1.75',
        200: '2',
      },
    },
  },
  plugins: [],
}
