/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      mini: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        header: ["Bebas Neue", "sans-serif"],
        body: ["PT Sans Narroo", "sans-serif"],
      },
      colors: {
        primary: '#073511',
        secondary: '#1D4423'
      }
    },
  },
  plugins: [],
}

