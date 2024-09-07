/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a53860",
        secondary: "#ccc5b9",
        n: {
          1: "#252422",
          2: "#403d39",
        },
      },
    },
  },
  plugins: [],
};
