import { BaseApi } from '~/api/base'

export class SuperTeacherAPI extends BaseApi {
  getAllStudentTopics() {
    return this.get('/super-teacher/student-topic')
  }

  getAllStudentGroups() {
    return this.get('/super-teacher/student-groups')
  }

  lockStudentGroup() {
    return this.put('/super-teacher/student-group/lock')
  }

  updateStudentGroupTeacher(data) {
    return this.put('/super-teacher/teacher-group/student', data)
  }
}
