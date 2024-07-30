export default ($axios) => ({
  async getPaymentMethods(params) {
    return await $axios.$get('/payment-methods', { params })
  },
  async createPaymentMethod(data) {
    return await $axios.$post('/payment-methods', data)
  },
  async getPaymentMethod(id, params) {
    return await $axios.$get(`/payment-methods/${id}`, { params })
  },
  async updatePaymentMethod(id, data) {
    return await $axios.$put(`/payment-methods/${id}`, data)
  },
  async deletePaymentMethod(id) {
    return await $axios.$delete(`/payment-methods/${id}`)
  }
})
