// ✅ tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Gabarito", "sans-serif"],
        thai: ["IBM Plex Sans Thai", "sans-serif"],
      },
      width: {
        fill: "-webkit-fill-available",
      },
    },
  },
  plugins: [],
};
