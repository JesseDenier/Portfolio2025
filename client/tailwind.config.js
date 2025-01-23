module.exports = {
  // Specifies the paths to all of the template files in the project
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        lightgreen: "#8CB38A",
        darkgreen: "#003622",
        yellow: "#FDBA4D",
      },
    },
  },
  plugins: [],
};
