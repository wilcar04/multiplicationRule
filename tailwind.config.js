import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a53860",
        secondary: "#ccc5b9",
        test1: "#E84A8C",
        test2: "#F3A5C5",
        n: {
          1: "#252422",
          2: "#403d39",
          3: "#dee2e6",
        },
        stroke: "#495057",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        kanit: "var(--font-kanit)",
      },
    },
  },
  plugins: [],
};
