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
      keyframes: {
        checkmark: {
          '0%': {
            height: 0,
            width: 0,
            opacity: 0,
          },
          '40%': {
            height: 0,
            width: '6px',
            opacity: 1,
          },
          '100%': {
            opacity: 1,
            height: '10px',
          }
        }
      },
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
