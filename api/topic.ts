import { BaseApi } from '~/api/base'
export class TopicAPI extends BaseApi {
  getTopics(params) {
    return this.get('/topics', { params })
  }

  getTopic(id) {
    return this.get(`/topics/${id}`)
  }

  createTopic(data) {
    return this.post('/topics', data)
  }

  updateTopic(id, data) {
    return this.put(`/topics/${id}`, data)
  }

  deleteTopic(id) {
    return this.delete(`/topics/${id}`)
  }

  checkTopic(id, status) {
    return this.post(`/topics/${id}/${status}`)
  }

  resetTopic() {
    return this.put('/super-teacher/reset-topic')
  }
}
