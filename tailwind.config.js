/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "786px",
      lg: "1024px",
    },
    extend: {
      colors: {
        primarcolor: "#010a5e",
        PrimaryColorLight: "#010d78",
        SecondaryColor: "#FFCC00",
        paragraphColor: "#c0c0c0",
        greenColor: "#007936",
        redColor: "#cc3433",
        darkcolor: "#000",
        darkcolorLight: "#171717",
      },
      keyframes: {
        move: {
          "50%": { transform: "translatey(-1rem)" },
        },
      },
      animation: {
        movingy: "move 2s linear infinite",
      },
      container: {
        center: true,
        padding: {
          Default: "1rem",
          sm: "1.5rem",
        },
      },
      fontFamily: {
        oswald: [" oswand ", "sans-serif"],
        dmsans: ["DM Sans ", "sans-serif"],
      },
    },
  },
  plugins: [],
};
