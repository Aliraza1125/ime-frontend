/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        "text-gradient":
          "linear-gradient(92.95deg, #FFC205 -1.41%, #E91C17 23.35%, #C81E5A 51.22%, #BC1F74 61.5%, #B0208C 83.1%, #C42F97 101.75%, #DE42A5 116.23%, #BC5AB2 134.2%, #3DBBCB 165.98%, #62BB47 201.73%)",
        "theme-gradient":
          "linear-gradient(92.95deg, #FFC205 -1.41%, #E91C17 23.35%, #C81E5A 51.22%, #BC1F74 61.5%, #B0208C 83.1%, #C42F97 101.75%, #DE42A5 116.23%, #BC5AB2 134.2%, #3DBBCB 165.98%, #62BB47 201.73%)",
        "enquiry-gradient":
          "linear-gradient(90deg, #FFC205 -1.41%, #E91C17 23.35%, #C81E5A 51.22%, #BC1F74 61.5%, #B0208C 83.1%, #C42F97 101.75%, #DE42A5 116.23%, #BC5AB2 134.2%, #3DBBCB 165.98%, #62BB47 201.73%)",
      },
      boxShadow: {
        customBoxShadow:
          "0px 173px 49px rgba(161, 58, 145, 0.0), 0px 111px 44px rgba(161, 58, 145, 0.01), 0px 62px 37px rgba(161, 58, 145, 0.05), 0px 28px 28px rgba(161, 58, 145, 0.09), 0px 7px 15px rgba(161, 58, 145, 0.10)",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
        notoSans: ["Noto Sans", "sans-serif"],
        clashdisplay: ["clashdisplay"],
      },
    },
  },
  plugins: [],
};
