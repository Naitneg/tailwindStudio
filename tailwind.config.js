/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        128: "60rem",
      },
      keyframes: {
        slideAbove: {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        slideBack: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-100%)" },
        },
      },
      animation: {
        "slide-above": "slideAbove 0.7s ease-out forwards",
        "slide-back": "slideBack 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
