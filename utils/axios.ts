import axios from 'axios'

export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig()
    const baseUrl = runtimeConfig.public.apiBase

    const client = axios.create({
        baseURL: baseUrl,
        timeout: 100000, // 10s
    })

    client.interceptors.request.use((config) => {
        const { data } = useAuth()
        console.log('dataaaaaaaaa', data.value)
        const token = data.value?.jwt
        if (token) {
            // @ts-ignore
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    })

    client.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            const { signOut } = useAuth()

            const code = error.response?.status
            if (code === 401) {
                signOut({ callbackUrl: '/auth/login' })
            }

            throw error
        }
    )

    return {
        provide: {
            axios: client,
        },
    }
})
