module.exports = {
	purge: [
		'./src/**/*.vue',
		'./src/**/*.js',
		'./src/**/*.jsx',
		'./src/**/*.html',
		'./src/**/*.md',
	],
	darkMode: 'class',
	theme: {
		extend: {
			/* eslint-disable no-mixed-spaces-and-tabs */
			screens: {
				'xs':'350px',
				'sm': '375px',
				'md': '640px',
				'mdl': '768px',
			    'lg': '1024px',
				'xl': '1280px',
			  },
			colors: {
				'primary-light': '#F7F8FC',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',
				'primary-dark': '#0D2438',
				'secondary-dark': '#102D44',
				'ternary-dark': '#1E3851',
			},
			container: {
				padding: {
					DEFAULT: '0.5rem',
					sm: '1.5rem',
					lg: '2.5rem',
					xl: '3rem',
					'2xl': '8rem',
				},
			},
		},
	},
	variants: {
		extend: { opacity: ['disabled'] },
	},
	plugins: [require('@tailwindcss/forms')],
};
