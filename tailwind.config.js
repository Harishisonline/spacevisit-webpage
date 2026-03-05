/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        space: ['Orbitron', 'sans-serif'],
      },
      colors: {
        primary: "#0B0C10",
        secondary: "#1F2833",
        accent: "#45A29E",
        highlight: "#66FCF1",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
      },
    },
  },
  plugins: [],
};
