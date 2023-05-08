<script setup>
	const props = defineProps({
		type: {
			type: String,
			enum: ['success', 'warning', 'danger', 'info'],
			default: '',
		},
		variant: {
			type: String,
			enum: ['fill', 'outline'],
			default: 'fill',
		},
	})

	const variantClass = computed(() => {
		if (props.variant === 'fill') {
			return `bg-global-alert-success color-white`
		}

		return `border-global-alert-success color-global-alert-success`
	})
</script>

<template>
	variantClass: {{ variantClass }}
	<div :class="variantClass">
		<header>
			<slot name="header" />
		</header>
		<main>
			<slot />
		</main>
		<footer>
			<slot name="footer" />
		</footer>
	</div>
</template>
