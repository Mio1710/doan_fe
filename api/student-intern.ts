import { BaseApi } from '~/api/base'
export class StudentInternAPI extends BaseApi {
  getStudentInterns(params) {
    return this.get('/student-intern', { params })
  }

  getStudentIntern(id) {
    return this.get(`/student-intern/${id}`)
  }

  createStudentIntern(data) {
    return this.post('/student-intern', data)
  }

  updateStudentIntern(id, data) {
    return this.put(`/student-intern/${id}`, data)
  }

  deleteStudentIntern(id) {
    return this.delete(`/student-intern/${id}`)
  }

  registerIntern(topic_id) {
    return this.post('/student-intern/register', { topic_id })
  }

  importStudentIntern(data) {
    return this.post('/student-intern/import', data)
  }

  updateIntern(data) {
    return this.post('/student-intern/intern', data)
  }
}
