/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "bg-white": "var(--color-white)",
        "bg-primary": "var(--color-primary)",
        "bg-btn": "var(--color-btn)",
        "bg-sec": "var(--color-sec)",
        "bg-hoverT":"var(--color-hoverT)",
      },
      boxShadow: {
        card: "0px 35px 90px -25px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundVideo: {
        "hero-pattern": "url('/src/assets/videoBg.mp4')",
      },
    },
  },
  plugins: [require("daisyui")],
};