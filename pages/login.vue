<script setup>
	const apiStore = useApiStore()

	const user = reactive({
		username: 'kminchelle',
		password: '0lelplR',
	})

	const loading = reactive({
		login: false,
	})

	async function doLogin() {
		loading.login = true

		await apiStore.doPostAuthLogin(user)

		loading.login = false
	}
</script>

<template>
	<div class="container flex h-screen">
		<div class="m-auto w-1/2">
			<div class="m-b-24">
				<div class="m-b-4">
					<p class="m-b-8 fw-bold text-16">Login</p>
					<input v-model="user.username" type="text" class="p-y-8 border-gray b-rd-4 p-x-16 w-full" />
				</div>
				<div>
					<p class="m-b-8 fw-bold text-16">Senha</p>
					<input v-model="user.password" type="text" class="p-y-8 border-gray b-rd-4 p-x-16 w-full" />
				</div>
			</div>
			<button type="button" class="color-white p-x-24 b-rd-4 p-y-12 w-full bg-blue-500" @click="doLogin">
				Login
			</button>
		</div>
	</div>
</template>
