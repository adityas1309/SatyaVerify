/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS and JSX files in the src folder
  ],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // Add Montserrat as the default sans font
      },
    },
  },
  plugins: [],
};
