<script setup>
	const currentItem = ref(0)
	const menuItems = reactive([
		{
			title: 'Introdução',
			link: '/',
		},
		{
			title: 'Acordeão',
			link: '/docs/accordion',
		},
		{
			title: 'Botão',
			link: '/docs/button',
		},
		{
			title: 'Modal',
			link: '/docs/modal',
		},
	])

	function setCurrentItem(index) {
		currentItem.value = index
	}
</script>

<template>
	<div class="m-y-32 container">
		<div class="grid grid-cols-12 gap-16">
			<aside class="col-start-1 col-end-4">
				<nuxt-link
					v-for="(item, index) of menuItems"
					:key="item.title"
					:to="item.link"
					:class="[
						'm-b-16 b-rd-4 bg-global-dark-100 block cursor-pointer p-16 text-lg hover:bg-gray-900',
						{
							'bg-gray-900': index === currentItem,
						},
					]"
					@click="setCurrentItem(index)"
				>
					{{ item.title }}
				</nuxt-link>
			</aside>
			<main class="col-start-4 col-end-12">
				<slot />
			</main>
		</div>
	</div>
</template>
