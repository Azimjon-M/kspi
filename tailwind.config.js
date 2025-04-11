module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
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
