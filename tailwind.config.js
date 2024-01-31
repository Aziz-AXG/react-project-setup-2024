/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#141414",
        secondary: '#1c1c1c',
        color: '#e5e7eb',
        main: '#01bf71',
        green: '#adfa1d',
        redColor: "#fa5c5e",
        hoverRedColor: "#ef4444",
        salesMainColor: "#1e293b"
      },
    },
  },
  plugins: [],
}

