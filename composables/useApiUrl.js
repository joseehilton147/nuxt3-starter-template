export const useApiUrl = () => {
	const useProxy = useRuntimeConfig().public.USE_PROXY
	const URL_REQUEST = useProxy ? '/api' : useRuntimeConfig().public.API_URL

	return URL_REQUEST
}
