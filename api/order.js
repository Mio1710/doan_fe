export default ($axios) => ({
  async getOrders(params) {
    return await $axios.$get('/orders', { params })
  },
  async createOrders(data) {
    return await $axios.$post('/orders', data)
  },
  async getOrder(id) {
    return await $axios.$get(`/orders/${id}`)
  },
  async updateOrder(id, data) {
    return await $axios.$put(`/orders/${id}`, data)
  },
  async deleteOrders(id) {
    return await $axios.$delete(`/orders/${id}`)
  }
})
