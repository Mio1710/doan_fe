export default ($axios) => ({
  async getClassrooms(params) {
    return await $axios.$get('/classes', { params })
  },
  async createClassroom(data) {
    return await $axios.$post('/classes', data)
  },
  async getClassroom(id, params) {
    return await $axios.$get(`/classes/${id}`, { params })
  },
  async updateClassroom(id, data) {
    return await $axios.$put(`/classes/${id}`, data)
  },
  async deleteClassroom(id) {
    return await $axios.$delete(`/classes/${id}`)
  }
})
