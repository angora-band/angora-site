/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'angora-white': '#f8f8f0',
				'angora-dark-white': '#e0e0d8',
				'angora-black': '#182028',
				'angora-dark-black': '#081018',
				'angora-purple': '#9818b8',
				'angora-dark-purple': '#5b1470',
				'angora-green': '#18c058',
				'angora-dark-green': '#108044',
			},
			boxShadow: {
				full: '100vh 100vw 100vh 100vw rgba(0, 0, 0, 0.3)',
			},
		},
	},
	plugins: [],
};
