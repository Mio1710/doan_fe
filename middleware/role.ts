export default defineNuxtRouteMiddleware((to, from) => {
  if (to.fullPath === '/dashboard') return
  console.log('middleware/auth.global')
  console.log('to', to)
  console.log('from', from)
  const auth = useState('auth')
  console.log('auth defineNuxtRouteMiddleware', auth)
})
// export default defineNuxtRouteMiddleware((to, from) => {
//   if (to.params.id === '1') {
//     return abortNavigation()
//   }
//   // In a real app you would probably not redirect every route to `/`
//   // however it is important to check `to.path` before redirecting or you
//   // might get an infinite redirect loop
//   if (to.path !== '/') {
//     return navigateTo('/')
//   }
// })
