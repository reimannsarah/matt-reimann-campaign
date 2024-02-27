/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      mini: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    boxShadow: {
      inner: "inset 0 2px 4px 2px rgba(0, 0, 0, 0.2)",
    },
    extend: {
      fontFamily: {
        header: ["Bebas Neue", "sans-serif"],
        body: ["PT Sans Narroo", "sans-serif"],
      },
      colors: {
        primary: "#0C2229",
        secondary: "#132758",
        green: "#CBE90B",
        indigo: "#2E3FFF",
        orange: "#FF5E00",
      },
      transitionProperty: {
        'top': 'top',
      },
    },
  },
  plugins: [],
};
