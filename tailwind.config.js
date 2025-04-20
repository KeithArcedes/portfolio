/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Includes pages
    "./components/**/*.{js,ts,jsx,tsx}", // Includes components
    "./app/**/*.{js,ts,jsx,tsx}", // If you're using the app directory
    "./src/**/*.{js,ts,jsx,tsx}", // If you have source folder (optional)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
