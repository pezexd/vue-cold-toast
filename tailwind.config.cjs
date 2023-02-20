/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./sandbox/**/*.{vue,js,ts,jsx,tsx}",
    "./sandbox/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    plugins: [],
    purge: {
      enabled: true,
      content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
      ],
    },
  }
}
