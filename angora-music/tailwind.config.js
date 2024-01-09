/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'angora-white': '#f8f8f0',
				'angora-black': '#182028',
				'angora-purple': '#9818b8',
				'angora-dark-purple': '#5b1470',
				'angora-green': '#18c058',
				'angora-dark-green': '#108044',
			},
		},
	},
	plugins: [],
};
