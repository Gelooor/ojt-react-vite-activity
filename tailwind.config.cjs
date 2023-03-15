/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        crimsonText: ['"Crimson Text"', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundSize: {
        110: "110rem",
        55: "55rem",
      },
      backgroundImage: {
        hero: "url('src/assets/images/hero-bg.png')",
        testimonial: "url('src/assets/images/background-1.png')",
        ad: "url('src/assets/images/barber-brush.png')",
      },
    },
  },
  plugins: [],
};
