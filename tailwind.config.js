/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        edu: ['"Edu VIC WA NT Beginner"', "sans-serif"],
        inconsolata: ['"Inconsolata"', "monospace"], // Add the new font
        // Add more custom fonts if needed
      },
    },
  },
  plugins: [],
};
