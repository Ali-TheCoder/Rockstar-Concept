/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "landing-pic": "url('/Assets/Images/Hero Photo.svg')",
        "border-gradient": "linear-gradient(to bottom,#E5AC8F,#E35FC2)",
      },
    },
  },
  plugins: [],
};
