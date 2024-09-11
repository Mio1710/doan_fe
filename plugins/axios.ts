import axios from 'axios'
// import { stringify } from 'qs'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()
  const baseUrl = runtimeConfig.public.apiBase

  const client = axios.create({
    baseURL: baseUrl,
    timeout: 10000, // 10s
    // withCredentials: true,
  })

  client.interceptors.request.use((config) => {
    const { data } = useAuth()
    console.log('check data interceptors', data.value)
    const token = data.value?.token
    if (token) {
      // @ts-ignore
      config.headers.Authorization = `Bearer ${token}`
    }

    // config.paramsSerializer = (params) => stringify(params, { encode: false, arrayFormat: 'comma' })

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
    },
  )

  nuxtApp.provide('axios', client)
})
