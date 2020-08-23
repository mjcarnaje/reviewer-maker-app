module.exports = {
	purge: ['./src/**/*.jsx', './src/**/*.js'],
	theme: {
		extend: {
			colors: {
				custom: {
					primary: '#82a4f3',
				},
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				berkshire: ['Berkshire\\ Swash', 'serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			spacing: {
				'60vh': '60vh',
				'70vh': '70vh',
				'80vh': '80vh',
				'85vh': '85vh',
				'90vh': '90vh',
				'60vw': '60vw',
				'70vw': '70vw',
				'80vw': '80vw',
				'85vw': '85vw',
				'90vw': '90vw',
			},

			padding: {
				large: '22rem',
			},
		},
	},
	variants: {},
	plugins: [],
};
