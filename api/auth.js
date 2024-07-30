export default ($axios) => ({
  async createUser(data) {
    return await $axios.$post('/auth/register', data)
  },
  async changePassword(data) {
    return await $axios.$put('/auth/change-password', data)
  }
})
