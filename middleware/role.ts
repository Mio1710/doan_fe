const { data } = useAuth()
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('middleware/role', data.value)
  console.log('middleware/auth.global')
  console.log('to', to)
  console.log('from', from)
  if (data.value?.role === 'admin') {
    return navigateTo('/admin')
  } else {
    return navigateTo('/student')
  }
})
