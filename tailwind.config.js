/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#EF4444",
        black: "#343434",
        white: "#ffff",
        lila: "#6a75db",
        gray: "#757575",
        "gray-2": "#e1e1e1",
      },
      height: {
        124: "30rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};
