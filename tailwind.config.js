/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        primary: '#456086',
        secondary: '#F88D8D',
        purple: '#844685',
        black: '#000000',
        softgray: '#fbf7f4',
        lightgray: '#f0e9e6',
        darkgray: '#CCC1BE',
        buttoncolor: '#F2F2F2',
        paragraphcolor: '#8C8C8C',
        linearorange: '#FCDEC6',
        linearpink: '#E0C7C4',
        linearblue: '#97adb1',
        linearsomon: '#e9e6ce',
        firstMember: '#cfcfcf',
        secondMember: '#51b1b5',
        thirdMember: '#888eae',
        fourthMember: '#d77660',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        secondary: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
