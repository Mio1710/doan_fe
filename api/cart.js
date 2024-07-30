export default ($axios) => ({
  async getCarts(params) {
    return await $axios.$get('/carts', { params })
  },
  async addCart(data) {
    return await $axios.$post('/carts/add', data)
  },
  async getCart(id, params) {
    return await $axios.$get(`/carts/${id}`, { params })
  },
  async updateCart(id, data) {
    return await $axios.$put(`/carts/${id}`, data)
  },
  async add(data) {
    return await $axios.$post('/carts/add', data)
  },
  async deleteCarts(id) {
    return await $axios.$delete(`/carts/${id}`)
  },
  async deleteItem(id) {
    return await $axios.$delete(`/carts/items/${id}`)
  }
})
