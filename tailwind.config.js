/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: "'Abril Fatface', cursive",
        body: "'Poppins', sans-serif",
      },
      colors: {
        galliano: {
          DEFAULT: '#CDA60A',
          50: '#FAE695',
          100: '#F9E181',
          200: '#F7D85A',
          300: '#F5CE34',
          400: '#F3C50D',
          500: '#CDA60A',
          600: '#987B07',
        },
      },
      dropShadow: {
        default: '1px 6px 6px #000000',
      },
    },
  },
  plugins: [],
}
