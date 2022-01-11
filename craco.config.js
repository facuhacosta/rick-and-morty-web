
// craco.config.json
module.exports = {
	style: {
		postcss: {
			plugins: [
				require('tailwindcss'),
				require('autoprefixer'),
			],
		},
	},
}
