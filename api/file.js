export default ($axios) => ({
  async getFiles(params) {
    return await $axios.$get('/files', { params })
  },
  async createFile(data) {
    return await $axios.$post('/files', data)
  },
  async getFile(id, params) {
    return await $axios.$get(`/files/${id}`, { params })
  },
  async updateFile(id, data) {
    return await $axios.$put(`/files/${id}`, data)
  },
  async deleteFile(id) {
    return await $axios.$delete(`/files/${id}`)
  },
  async downloadFile(id) {
    return await $axios.$get(`/files/${id}/download`, {
      responseType: 'blob'
    })
  },
  async getStudentFiles(params) {
    return await $axios.$get('/files/students', { params })
  }
})
