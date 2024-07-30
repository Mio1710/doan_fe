export default ($axios) => ({
  async getDeliveryMethods(params) {
    return await $axios.$get('/delivery-methods', { params })
  },
  async createDeliveryMethod(data) {
    return await $axios.$post('/delivery-methods', data)
  },
  async getDeliveryMethod(id, params) {
    return await $axios.$get(`/delivery-methods/${id}`, { params })
  },
  async updateDeliveryMethod(id, data) {
    return await $axios.$put(`/delivery-methods/${id}`, data)
  },
  async deleteDeliveryMethod(id) {
    return await $axios.$delete(`/delivery-methods/${id}`)
  }
})
