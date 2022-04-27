const colors = require('tailwindcss/colors');

module.exports = {
	corePlugins: {
		ringColor: false,
	},
	purge: {
		content: [
			'./pages/**/*.js',
			'./components/**/*.js'
		],
	},
	theme: {
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
			mono: ['IBM Plex Mono', 'monospace'],
			serif: ['new-spirit-condensed']
		},
		colors: {
			transparent: 'transparent',
			red: colors.red,
			white: colors.white,
			fadeWhite: '#F1F1F8',
			black: colors.black,
			gray: {
				dark: '#7F8DA9',
				light: '#CED5E3',
			},
			yblue: {
				regular: '#0657F9',
				hover: '#004ADF',
				light: '#E0EAFF',
			},
			bluepillblue: {
				regular: '#648ec9',
				hover: '#004ADF',
				light: '#E0EAFF',
			},
			ygray: {
				50: '#93939D',
				70: '#9C9CA6',
				100: '#333333',
				200: '#4F4F4F',
				400: '#BDBDBD',
				500: '#E0E0E0',
				600: '#F2F2F2',
				'700': '#2c3e50',
				'900': '#363636',
			}
		},
		extend: {
			width: {
				'53': '214px',
				'64.5': '16.125rem',
				'235.5': '58.875rem',
				'3xl': '800px',
			},
			maxHeight: {
				'max': '1000px',
			},
			maxWidth: {
				'64.5': '16.125rem',
				'235.5': '58.875rem',
				'xl': '552px',
				'3xl': '800px',
				'4xl': '904px',
				'6xl': '1200px',
			},
			fontSize: {
				'sm': ['15px', '24px'],
				'2xl': ['24px', '40px'],
				'3xl': ['32px', '40px'],
				'6xl': ['56px', '72px'],
				'8xl': ['96px', '120px'],
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')
	],
};