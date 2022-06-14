/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    daisyui: {
      themes: [
        {
            theme: {
            primary: "#00FF00",
            secondary: "#FF0000",
            accent: "#3A4256",
            neutral: "#3d4451",
            
          },
        },
        "dark",
        "cupcake",
      ],
    },
  },
  plugins: [require("daisyui")],
}
