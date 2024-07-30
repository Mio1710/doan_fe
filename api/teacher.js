export default ($axios) => ({
  async getUsers(params) {
    return await $axios.$get('/users', { params })
  },
  async createUser(data) {
    return await $axios.$post('/users', data)
  },
  async getUser(id, params) {
    return await $axios.$get(`/users/${id}`, { params })
  },
  async updateUser(id, data) {
    return await $axios.$put(`/users/${id}`, data)
  },
  async deleteUser(id) {
    return await $axios.$delete(`/users/${id}`)
  },
  async getCurrentStudents(params) {
    return await $axios.$get('/teachers/students', {
      params
    })
  },
  async acceptCompany(id) {
    return await $axios.$put(`/teachers/accept-company/${id}`)
  },
  async rejectCompany(id) {
    return await $axios.$put(`/teachers/reject-company/${id}`)
  }
})
