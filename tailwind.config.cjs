/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3f7ff",
          100: "#e3edff",
          200: "#c6d9ff",
          300: "#a4c1ff",
          400: "#7fa3ff",
          500: "#597eff",
          600: "#445edc",
          700: "#3044b3",
          800: "#1e2c7d",
          900: "#101847"
        }
      }
    }
  },
  plugins: []
};
