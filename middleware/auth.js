export default defineNuxtRouteMiddleware(to => {
	const apiStore = useApiStore()

	if (!apiStore.getToken) {
		abortNavigation()

		return navigateTo('/login')
	}

	navigateTo(to, {replace: true})
})
