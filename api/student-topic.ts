import { BaseApi } from '~/api/base'
export class StudentTopicAPI extends BaseApi {
  getStudentTopics(params) {
    return this.get('/student-topic', { params })
  }

  getStudentTopic(id) {
    return this.get(`/student-topic/${id}`)
  }

  createStudentTopic(data) {
    return this.post('/student-topic', data)
  }

  updateStudentTopic(id, data) {
    return this.put(`/student-topic/${id}`, data)
  }

  deleteStudentTopic(id) {
    return this.delete(`/student-topic/${id}`)
  }

  activeStudentTopic(id) {
    return this.post(`/student-topic/active/${id}`)
  }

  importStudentTopic(data) {
    return this.post('/student-topic/import', data)
  }
}
