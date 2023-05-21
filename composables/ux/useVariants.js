// @unocss-include
const variants = {
	solid: {
		primary: 'bg-primary-800 color-white hover:bg-primary-900',
		purple: 'bg-purple-800 color-white hover:bg-purple-900',
	},
	outline: {
		primary: 'color-primary-500 border border-primary-800 hover:bg-primary-800 hover:color-white',
		purple: 'color-purple-500 border border-purple-800 hover:bg-purple-800 hover:color-white',
	},
	soft: {
		primary: 'bg-primary-400 hover:bg-primary-800',
		purple: 'bg-purple-400 hover:bg-purple-800',
	},
	ghost: {
		primary: 'color-primary-500 bg-primary-800 bg-opacity-20  hover:bg-opacity-40',
		purple: 'color-purple-500 bg-purple-800 bg-opacity-20  hover:bg-opacity-40',
	},
	link: {
		primary: 'color-primary-500 hover:underline',
		purple: 'color-purple-500 hover:underline',
	},
	icon: {
		primary: 'hover:color-primary-500',
		purple: 'hover:color-purple-500',
	},
}

export default function () {
	return variants
}
