/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        metallicBlue: "#1e4d79",
        cyanBlue: "#1D88B6",
        customblue: "#01afd6",
        silver: "#dee3e5",
        grey: "#b6c0cb",
        redAsterisk: "#ff0000",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".required-asterisk::after": {
          content: '"*"',
          color: "#ff0000",
          marginLeft: "0.25rem",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
