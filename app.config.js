const defaultColors = ['primary', 'secondary', 'red', 'green', 'yellow', 'gray', 'cyan', 'blue']

const variants = ['solid', 'outline', 'soft', 'ghost', 'link', 'icon']

export default defineAppConfig({
	ui: {
		button: {
			colors: defaultColors,
			variants,
		},
	},
})
