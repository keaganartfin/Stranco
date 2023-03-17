const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/**/*.{html,js}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    colors: {
      ...colors,
      "slate-850": "#192239",
    },
    extend: {
      minHeight: {
        "screen-75": "75vh",
      },
      fontSize: {
        55: "55rem",
      },
      opacity: {
        80: ".8",
      },
      zIndex: {
        2: 2,
        3: 3,
      },
      inset: {
        "-100": "-100%",
        "-225-px": "-14.063rem",
        "-160-px": "-10rem",
        "-150-px": "-9.375rem",
        "-94-px": "-5.875rem",
        "-50-px": "-3.125rem",
        "-29-px": "-1.813rem",
        "-20-px": "-1.25rem",
        "25-px": "1.563rem",
        "40-px": "2.5rem",
        "95-px": "5.938rem",
        "145-px": "9.063rem",
        "195-px": "12.188rem",
        "210-px": "13.125rem",
        "260-px": "16.25rem",
      },
      height: {
        "95-px": "5.938rem",
        "70-px": "4.375rem",
        "350-px": "21.875rem",
        "500-px": "31.25rem",
        "600-px": "37.5rem",
      },
      maxHeight: {
        "860-px": "53.75rem",
      },
      maxWidth: {
        "100-px": "6.25rem",
        "120-px": "7.5rem",
        "150-px": "9.375rem",
        "180-px": "11.25rem",
        "200-px": "12.5rem",
        "210-px": "13.125rem",
        "580-px": "36.25rem",
      },
      minWidth: {
        "140-px": "8.75rem",
        48: "12rem",
      },
      backgroundSize: {
        full: "100%",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addComponents, theme }) {
      const screens = theme("screens", {});
      addComponents([
        {
          ".container": { width: "100%" },
        },
        {
          [`@media (min-width: ${screens.sm})`]: {
            ".container": {
              "max-width": "640px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.md})`]: {
            ".container": {
              "max-width": "768px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.lg})`]: {
            ".container": {
              "max-width": "1024px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.xl})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
        {
          [`@media (min-width: ${screens["2xl"]})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
      ]);
    }),
  ],
};
