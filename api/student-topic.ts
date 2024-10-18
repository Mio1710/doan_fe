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

  registerTopic(topic_id) {
    return this.post('/student-topic/register', { topic_id })
  }

  importStudentTopic(data) {
    return this.post('/student-topic/import', data)
  }

  getRegistedTopic() {
    return this.get('/student-topic/registed')
  }

  updateTopic(data) {
    return this.post('/student-topic/topic', data)
  }

  cancelGroup(user_ids) {
    return this.post('/student-topic/cancel-group')
  }

  createGroup(data) {
    return this.post('/student-topic/create-group', data)
  }
}
