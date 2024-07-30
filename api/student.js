export default ($axios) => ({
  async getStudents(params) {
    return await $axios.$get('/students', { params })
  },
  async createStudent(data) {
    return await $axios.$post('/students', data)
  },
  async getStudent(id, params) {
    return await $axios.$get(`/students/${id}`, { params })
  },
  async updateStudent(id, data) {
    return await $axios.$put(`/students/${id}`, data)
  },
  async deleteStudent(id) {
    return await $axios.$delete(`/students/${id}`)
  },
  async getMyCompany() {
    return await $axios.$get('/students/my-company')
  },
  async getStudentCompany(params) {
    return await $axios.$get('/students/student-company', { params })
  },
  async updateReport(id, data) {
    return await $axios.$put(`/students/${id}/report`, data)
  }
})
