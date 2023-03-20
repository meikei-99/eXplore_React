/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Anton: ["Anton", "sans-serif"],
      Firo: ["Firo Sans", "sans-serif"],
      PT: ["PT Sans", "sans-serif"],
      Source: ["Source Sans Pro", "sans-serif"],
    },
    extend: {
      fontSize: {
        "11xl": "11rem",
        "10xl": "10rem",
      },
      textUnderlineOffset: {
        10: "10px",
      },
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(15px)" },
        },
      },
      screens: {
        xs: "360px",
      },
    },
  },
  plugins: [],
};
