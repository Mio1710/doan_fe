export default ($axios) => ({
  async getCompanies(params) {
    return await $axios.$get('/companies', { params })
  },
  async createCompany(data) {
    return await $axios.$post('/companies', data)
  },
  async getCompany(id, params) {
    return await $axios.$get(`/companies/${id}`, { params })
  },
  async updateCompany(id, data) {
    return await $axios.$put(`/companies/${id}`, data)
  },
  async deleteCompany(id) {
    return await $axios.$delete(`/companies/${id}`)
  }
})
