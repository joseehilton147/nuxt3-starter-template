// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: 'pt-BR',
			},
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
			],
			script: [],
			link: [],
			style: [],
			noscript: [],
		},
	},

	css: ['~/assets/style/main.css', '@unocss/reset/tailwind.css'],
	modules: ['@pinia/nuxt', '@unocss/nuxt', 'nuxt-icon', '@pinia-plugin-persistedstate/nuxt', '@nuxt-alt/proxy'],

	pinia: {
		autoImports: ['defineStore'],
	},

	imports: {
		dirs: ['stores', 'services'],
	},

	build: {
		transpile: ['vue-toastification'],
	},

	runtimeConfig: {
		public: {
			API_URL: process.env.NUXT_PUBLIC_API_URL,
			USE_PROXY: process.env.ENVIROMENT === 'dev',
		},
	},

	proxy: {
		proxies: {
			'/api': {
				target: process.env.NUXT_PUBLIC_API_URL,
				changeOrigin: true,
				rewrite: (path: any) => path.replace(/^\/api/, ''),
			},
		},
	},

	ssr: false,

	experimental: {
		viewTransition: true,
	},
})
