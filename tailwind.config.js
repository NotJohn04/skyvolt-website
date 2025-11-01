/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /animate-(slide-in-from-left|slide-out-to-left|slide-in-from-right|slide-out-to-right|slide-in-from-top|slide-out-to-top|slide-in-from-bottom|slide-out-to-bottom)/,
    },
  ],
  theme: {
    extend: {
        keyframes: {
          "slide-in-from-left": {
            "0%": { transform: "translateX(-100%)" },
            "100%": { transform: "translateX(0)" },
          },
          "slide-out-to-left": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-100%)" },
          },
          "slide-in-from-right": {
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(0)" },
          },
          "slide-out-to-right": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(100%)" },
          },
          "slide-in-from-top": {
            "0%": { transform: "translateY(-100%)" },
            "100%": { transform: "translateY(0)" },
          },
          "slide-out-to-top": {
            "0%": { transform: "translateY(0)" },
            "100%": { transform: "translateY(-100%)" },
          },
          "slide-in-from-bottom": {
            "0%": { transform: "translateY(100%)" },
            "100%": { transform: "translateY(0)" },
          },
          "slide-out-to-bottom": {
            "0%": { transform: "translateY(0)" },
            "100%": { transform: "translateY(100%)" },
          },
        },
        animation: {
          "slide-in-from-left": "slide-in-from-left 0.3s ease-out forwards",
          "slide-out-to-left": "slide-out-to-left 0.3s ease-in forwards",
          "slide-in-from-right": "slide-in-from-right 0.3s ease-out forwards",
          "slide-out-to-right": "slide-out-to-right 0.3s ease-in forwards",
          "slide-in-from-top": "slide-in-from-top 0.3s ease-out forwards",
          "slide-out-to-top": "slide-out-to-top 0.3s ease-in forwards",
          "slide-in-from-bottom": "slide-in-from-bottom 0.3s ease-out forwards",
          "slide-out-to-bottom": "slide-out-to-bottom 0.3s ease-in forwards",
        },
        fontFamily: {
          bernier: ['"Bernier Distressed"', "ui-sans-serif", "system-ui", "sans-serif"],
        },
        letterSpacing: {
          // helps the logo wordmark breathe
          brand: "0.12em",
        },
      },
      
  },
  plugins: [],
};
