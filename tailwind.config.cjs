/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "440px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      beige_light: "#f8ebdb",
      beige_dark: "#d4c6a9",
      green_light: "#a1a67c",
      green_dark: "#6c7653",
      dark: "#484F37",
      white: "#ffffff",
      black: "#000000",
    },
    extend: {
      backgroundImage: {
        "footer-figur":
          "url('img/expand_footer.svg')",
        designerhover:
          "url('img/designerwhite.svg')",
        designer:
          "url('img/designergreen.svg')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
