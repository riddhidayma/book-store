// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     'node_modules/flowbite-react/***/*.{js,jsx,ts,tsx}'
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require('flowbite/plugin')],
// }

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // For your React components
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', // Flowbite components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // Enables Flowbite UI components
  ],
};
