export default ($axios) => ({
  async getCategories(params) {
    return await $axios.$get('/common/categories', { params })
  },
  async getBrands(params) {
    return await $axios.$get('/common/brands', { params })
  }
})
