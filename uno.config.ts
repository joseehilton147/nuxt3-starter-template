import {defineConfig, presetUno} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
	presets: [presetUno(), presetRemToPx({baseFontSize: 4})],
	shortcuts: [[/^wh-(.+)$/, ([, d]) => `w-${d}px h-${d}px`]],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '2rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		breakpoints: {
			xs: '320px',
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
		},
	},
	postprocess: util => {
		if (util.selector && typeof util.selector === 'string') {
			// When using border utilities, add border-width and border-style
			if (/^\.border-(.*)$/.test(util.selector)) {
				util.entries.push(['border-width', '1px'], ['border-style', 'solid'])

				return
			}

			const textSizes = [
				'text-xs',
				'text-sm',
				'text-base',
				'text-lg',
				'text-xl',
				'text-2xl',
				'text-3xl',
				'text-4xl',
				'text-5xl',
				'text-6xl',
				'text-7xl',
				'text-8xl',
				'text-9xl',
			]

			if (textSizes.some(size => util.selector.includes(size))) {
				util.entries.forEach(i => {
					const value = i[1] && i[1].toString()

					if (value) i[1] = `${+value.slice(0, -2) * 4}px`
				})
			}
		}
	},
})
