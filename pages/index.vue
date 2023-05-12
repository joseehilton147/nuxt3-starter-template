<script setup>
	const apiStore = useApiStore()

	const loggedUser = ref(null)

	function doLogout() {
		apiStore.doLogout()
	}

	onMounted(() => {
		loggedUser.value = apiStore.getPayload
	})

	definePageMeta({
		layout: 'authenticated',
		middleware: ['auth'],
	})
</script>

<template>
	<div class="container">
		<div class="m-b-32">
			<h1 class="fw-bold text-32">Parabéns, você está logado!</h1>
			<button type="button" class="color-white p-x-24 b-rd-4 p-y-8 bg-blue-500" @click="doLogout">
				Deslogar
			</button>
		</div>
		<p>payload:</p>
		<pre>{{ loggedUser }}</pre>
	</div>
</template>
