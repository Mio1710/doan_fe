export default ($axios) => ({
  async getBrands(params) {
    return await $axios.$get('/brands', { params })
  },
  async createBrand(data) {
    return await $axios.$post('/brands', data)
  },
  async getBrand(id, params) {
    return await $axios.$get(`/brands/${id}`, { params })
  },
  async updateBrand(id, data) {
    return await $axios.$post(`/brands/${id}`, data)
  },
  async deleteBrand(id) {
    return await $axios.$delete(`/brands/${id}`)
  }
})
