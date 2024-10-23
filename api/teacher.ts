import { BaseApi } from '~/api/base'
export class TeacherApi extends BaseApi {
  getStudentTopics(params) {
    return this.get('/admin/teachers/student-topic', { params })
  }

  getStudentResultLOs(params) {
    return this.get('/teachers/student-results-lo', { params })
  }

  updateStudentResultLOs(data) {
    return this.put('/teachers/student-results-lo', data)
  }
}
