import { BaseApi } from '~/api/base'
export class AdminApi extends BaseApi {
  getTeachers(params) {
    return this.get('/admin/teachers', { params })
  }

  getTeacher(id) {
    return this.get(`/admin/teachers/${id}`)
  }

  createTeacher(data) {
    return this.post('/admin/teachers', data)
  }

  updateTeacher(id, data) {
    return this.put(`/admin/teachers/${id}`, data)
  }

  deleteTeacher(id) {
    return this.delete(`/admin/teachers/${id}`)
  }

  activeTeacher(id, data) {
    return this.post(`/admin/teachers/${id}/update-role`, { data })
  }

  importUser(data) {
    return this.post('/admin/teachers/import', data)
  }

  createSuperTeacher(data) {
    return this.post('/admin/super-admin/super-teacher', data)
  }

  getStudentTopics(params) {
    return this.get('/admin/teachers/student-topic', { params })
  }
}
