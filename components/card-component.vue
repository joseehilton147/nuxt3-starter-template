<script setup>
	const slots = useSlots()
</script>

<template>
	<div class="bg-global-dark-100 b-rd-4 p-16">
		<header v-if="slots?.header">
			<slot name="header" />
		</header>
		<main>
			<slot />
		</main>
		<footer v-if="slots?.footer">
			<slot name="footer" />
		</footer>
	</div>
</template>
