module.exports = {
  // Specifies the paths to all of the template files in the project
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        emerald: "#239B75",
        sage: "#A9CBB7",
        golden: "#E6B855",
        forest: "#1E4D41",
        ivory: "#F6F3E1",
        darkgreen: "#003622",
        yellow: "#FDBA4D",
      },
    },
  },
  plugins: [],
};
