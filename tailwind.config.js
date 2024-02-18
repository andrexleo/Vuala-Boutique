/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Pacifico", "Sriracha", "cursive"],
        cursive2: ["Sriracha", "cursive"],
      },
      colors: {
        primary: "#E83667",
        secondary: "#21D4B9",
        brandDark: "##BB2C51",
        dark: "#1e1e1e",
        light: "#f5f5f5",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
      },
    },
  },
  plugins: [],
};
