/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#E26160",
        secondary: "#4BB7F6",
        light: "#F9FFFD",
        dark: "#131318",
      },

      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          "2xl": "12rem",
        },
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
}
