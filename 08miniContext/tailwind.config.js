/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btnColor: "#171617", // Example custom color
        secondary: "#2ecc71", // Another example custom color
      },
    },
  },
  plugins: [],
};
