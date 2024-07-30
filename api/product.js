export default ($axios) => ({
  async getProds(params) {
    return await $axios.$get('/products', { params })
  },
  async createProd(data) {
    return await $axios.$post('/products', data)
  },
  async getProd(id, params) {
    return await $axios.$get(`/products/${id}`, { params })
  },
  async updateProd(id, data) {
    return await $axios.$post(`/products/${id}`, data)
  },
  async deleteProd(id) {
    return await $axios.$delete(`/products/${id}`)
  }
})
