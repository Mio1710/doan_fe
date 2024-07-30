export default ($axios) => ({
  async getCategories(params) {
    return await $axios.$get('/students', { params })
  },
  async createCategory(data) {
    return await $axios.$post('/categories', data)
  },
  async getCategory(id, params) {
    return await $axios.$get(`/categories/${id}`, { params })
  },
  async updateCategory(id, data) {
    return await $axios.$put(`/categories/${id}`, data)
  },
  async deleteCategory(id) {
    return await $axios.$delete(`/categories/${id}`)
  }
})
