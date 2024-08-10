/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./src/**/*.{html,js}",
		"./node_modules/flowbite/**/*.js"
	],
  theme: {
    extend: {
			backgroundImage: {
        'poker-table': "url('./assets/poker-table.jpg')",
        'poker-table-big': "url('./assets/poker-table-big.jpg')",
        'darkBlue': "url('./assets/bg-1.jpg')",
      },
			colors: {
				bronze: "rgb(205, 127, 50)",
				silver: "rgb(192, 192, 192)",
				gold: "rgb(255, 183, 0)",
			}
		},
  },
  plugins: [
		require('flowbite/plugin')
	],
}