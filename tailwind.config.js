import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a53860",
        n: {
          1: "#252422",
          2: "#403d39",
          3: "#dee2e6",
          4: "#6c757d",
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
