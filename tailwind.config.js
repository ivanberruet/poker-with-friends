/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
			backgroundImage: {
        'bg-poker-table': "url('./assets/poker-table.jpg')",
      }
		},
  },
  plugins: [],
}