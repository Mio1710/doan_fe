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

  changePassword(data) {
    return this.put('/teachers/change-password', data)
  }

  getStudentReportTopics(params) {
    console.log('params in getStudentReportTopics', params)
    return this.get('/teachers/student-topic/report', { params })
  }

  getStudentReportInterns(params) {
    return this.get('/teachers/student-intern/report', { params })
  }

  commentStudentReportTopic(id, data) {
    return this.put(`/teachers/student-topic/report/${id}/comment`, data)

  }
}
