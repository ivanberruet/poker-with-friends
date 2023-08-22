/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
			backgroundImage: {
        'poker-table': "url('./assets/poker-table.jpg')",
        'poker-table-big': "url('./assets/poker-table-big.jpg')",
      }
		},
  },
  plugins: [],
}