/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#3AB0FF",
      secondary: "#FFB562",
      tertiary: "#F87474",
      text: "#1A0000",
      lightText: "#0A2647",
      lightBlue: "#39B5E0",
      "gray-dark": "#273444",
      gray: "#8492a6",
      bkg: "#eee",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
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
