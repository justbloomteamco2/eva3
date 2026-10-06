/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A192F',
          light: '#112240',
          dark: '#020C1B',
        },
        accent: {
          DEFAULT: '#C5A059',
          light: '#D4B97A',
          dark: '#A68543',
        },
      },
    },
  },
  plugins: [],
}
