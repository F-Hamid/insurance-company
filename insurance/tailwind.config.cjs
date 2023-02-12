/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#3AB0FF",
      secondary: "#FFB562",
      cta: "#F87474",
      text: "#161C3D",
      lightText: "#3D3C42",
      lightBlue: "#39B5E0",
      "gray-dark": "#273444",
      gray: "#8492a6",
      bkg: "#F9F2ED",
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      serif: ["Roboto", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
