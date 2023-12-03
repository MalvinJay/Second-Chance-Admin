module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      md: {
        max: "1050px",
      },
      sm: {
        max: "550px",
      },
    },
    extend: {
      colors: {
        gray: {
          50: "#fbfbfd",
          100: "#f3f3f4",
          200: "#ededed",
          500: "#979797",
          900: "#17191c",
          "50_01": "#fafafa",
          "900_19": "#17191c19",
          "900_20": "#17191c0d",
          "500_01": "#999ca0",
          "900_26": "#17191c26",
          "900_7f": "#17191c7f",
        },
        blue_gray: {
          900: "#292d32",
          "900_19": "#292d3219",
          "900_87": "#292d3287",
          "900_99": "#292d3299",
        },
        deep_purple: { A200_19: "#7b61ff19", A200: "#7b61ff" },
        red: { 300: "#f87777", 500: "#f24646", "500_19": "#f2464619" },
        blue: { 400: "#4e8eda", A200: "#5282ff" },
        light_green: { 700: "#5eb734", "700_19": "#5eb73419" },
        black: { 900: "#000000", "900_19": "#00000019" },
        purple: {
          500: "#c504bf",
          A400: "#d60cd0",
          A200: "#fd1ff6",
          "500_19": "#c504bf19",
          A200_19: "#fd1ff619",
        },
        white: { A700_87: "#ffffff87", A700_00: "#ffffff00", A700: "#ffffff" },
      },
      backgroundImage: {
        gradient: "linear-gradient(148deg ,#fd1ff619,#c504bf19)",
        gradient1: "linear-gradient(148deg ,#fd1ff6,#c504bf)",
        gradient2: "linear-gradient(251deg ,#ffffff,#ffffff00)",
      },
      fontFamily: { plusjakartasans: "Plus Jakarta Sans" },
      boxShadow: { bs: "0px 10px  20px 5px #00000019" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
