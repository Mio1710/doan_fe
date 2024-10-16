import { BaseApi } from '~/api/base'

export class SuperTeacherAPI extends BaseApi {
  getAllStudentTopics() {
    return this.get('/super-teacher/student-topic')
  }
}
