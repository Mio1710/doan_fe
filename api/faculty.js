export default ($axios) => ({
  async getFaculties(params) {
    return await $axios.$get('/faculties', { params })
  },
  async createFaculty(data) {
    return await $axios.$post('/faculties', data)
  },
  async getFaculty(id, params) {
    return await $axios.$get(`/faculties/${id}`, { params })
  },
  async updateFaculty(id, data) {
    return await $axios.$put(`/faculties/${id}`, data)
  },
  async deleteFaculty(id) {
    return await $axios.$delete(`/faculties/${id}`)
  }
})
