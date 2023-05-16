<script setup>
	const slots = useSlots()

	const props = defineProps({
		btnClass: {
			type: [String, Array],
			default: '',
		},
		btnType: {
			type: String,
			default: 'button',
		},
		btnTitle: {
			type: String,
			default: '',
		},
		btnStyle: {
			type: String,
			default: 'primary',
			enum: ['primary', 'success', 'danger', 'warning', 'info', 'reset'],
		},
		btnVariant: {
			type: String,
			default: '',
			enum: ['light', 'outline', 'text', 'icon'],
		},
		btnIcon: {
			type: String,
			default: '',
		},
		btnIconPosition: {
			type: String,
			default: 'start',
			enum: ['start', 'end'],
		},
		btnDisabled: {
			type: Boolean,
			default: false,
		},
		displayLoading: {
			type: Boolean,
			default: false,
		},
		btnColors: {
			type: String,
			default: '',
		},
	})

	const styleMap = {
		primary: {
			light: 'color-purple-500 bg-purple-800 bg-opacity-20  hover:bg-opacity-40',
			outline: 'color-purple-500 border border-purple-800 hover:bg-purple-800 hover:color-white',
			text: 'color-purple-500 hover:bg-purple-800 hover:bg-opacity-20',
			icon: 'hover:color-purple-500',
			default: 'bg-purple-800 color-white hover:bg-purple-900',
		},
		success: {
			light: 'color-green-500 bg-green-800 bg-opacity-20  hover:bg-opacity-40',
			outline: 'color-green-500 border border-green-800 hover:bg-green-800 hover:color-white',
			text: 'color-green-500 hover:bg-green-800 hover:bg-opacity-20',
			icon: 'hover:color-green-600',
			default: 'bg-green-800 color-white hover:bg-green-900',
		},
		danger: {
			light: 'color-red-500 bg-red-800 bg-opacity-20 hover:bg-opacity-40',
			outline: 'color-red-500 border border-red-800 hover:bg-red-800 hover:color-white',
			text: 'color-red-500 hover:bg-red-800 hover:bg-opacity-20',
			icon: 'hover:color-red-600',
			default: 'bg-red-800 color-white hover:bg-red-900',
		},
		warning: {
			light: 'color-yellow-500 bg-yellow-800 bg-opacity-20  hover:bg-opacity-40',
			outline: 'color-yellow-500 border border-yellow-800 hover:bg-yellow-800 hover:color-white',
			text: 'color-yellow-600 hover:bg-yellow-800 hover:bg-opacity-20',
			icon: 'hover:color-yellow-600',
			default: 'bg-yellow-800 color-white hover:bg-yellow-900',
		},
		info: {
			light: 'color-cyan-500 bg-cyan-800 bg-opacity-20 hover:bg-opacity-40',
			outline: 'color-cyan-500 border border-cyan-800 hover:bg-cyan-800 hover:color-white',
			text: 'color-cyan-600 hover:bg-cyan-800 hover:bg-opacity-20',
			icon: 'hover:color-cyan-600',
			default: 'bg-cyan-800 color-white hover:bg-cyan-900',
		},
	}

	const btnStyle = computed(() => {
		if (props.btnStyle === 'reset') return ''

		const style = props.btnColors ? props.btnColors : styleMap[props.btnStyle]

		let additionalStyles =
			props.btnVariant !== 'icon'
				? 'fw-400 transition duration-400 ease-in-out p-y-8 p-x-16'
				: 'flex items-center justify-center transition duration-400 ease-in-out'

		if (props.btnDisabled) additionalStyles += ' opacity-50'

		return `${props.btnColors || style[props.btnVariant] || style.default} ${additionalStyles}`
	})
</script>

<template>
	<button
		:class="[btnClass, btnStyle, btnDisabled || displayLoading ? 'pointer-events-none' : '']"
		:type="btnType"
		:disabled="btnDisabled || displayLoading"
		:title="btnTitle"
	>
		<div class="flex contents cursor-pointer items-center justify-center">
			<Icon
				v-if="btnIcon || displayLoading"
				:name="displayLoading ? 'line-md:loading-twotone-loop' : btnIcon"
				class="wh-24"
				:class="{'order-last': btnIconPosition === 'end'}"
			/>
			<span
				v-if="slots?.default && !displayLoading"
				:class="{'ml-4': btnIconPosition === 'start' && btnIcon, 'mr-4': btnIconPosition === 'end' && btnIcon}"
			>
				<slot />
			</span>
		</div>
	</button>
</template>
