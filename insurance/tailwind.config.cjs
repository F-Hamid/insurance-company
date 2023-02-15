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
      lightBlue: "#7ac8f6",
      "gray-dark": "#A2B5BB",
      gray: "#CFD2CF",
      bkg: "#F9F2ED",
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      serif: ["Roboto", "serif"],
      perso: ["Aleo", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      // boxShadow: {
      //   perso: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      // },
    },
  },
};
