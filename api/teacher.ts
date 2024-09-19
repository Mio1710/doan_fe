import { BaseApi } from '~/api/base'
export class TeacherApi extends BaseApi {
  getTeachers(params) {
    return this.get('/teachers', { params })
  }

  getTeacher(id) {
    return this.get(`/teachers/${id}`)
  }

  createTeacher(data) {
    return this.post('/teachers', data)
  }

  updateTeacher(id, data) {
    return this.put(`/teachers/${id}`, data)
  }

  deleteTeacher(id) {
    return this.delete(`/teachers/${id}`)
  }

  activeTeacher(id) {
    return this.post(`/teachers/active/${id}`)
  }

  importUser(data) {
    return this.post('/teachers/import', data)
  }
}
