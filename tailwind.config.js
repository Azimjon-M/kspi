module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryLight: ["Light"],
        primaryRegular: ["Regular"],
        primaryMedium: ["Medium"],
        primaryBold: ["Bold"],
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [require("daisyui")],
};
