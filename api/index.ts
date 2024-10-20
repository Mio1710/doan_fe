import type { AxiosInstance } from 'axios'
import { SemesterAPI } from '~/api/semester'
import { TeacherApi } from '~/api/teacher'
import { StudentTopicAPI } from '~/api/student-topic'
import { TopicAPI } from '~/api/topic'
import { FacultyAPI } from '~/api/faculty'
import { SuperTeacherAPI } from '~/api/super-teacher'
import { LOAPI } from '~/api/lo'
import { ResultsAPI } from '~/api/results'
export class Api {
  public readonly semester: SemesterAPI
  public readonly teacher: TeacherApi
  public readonly studentTopic: StudentTopicAPI
  public readonly topic: TopicAPI
  public readonly faculty: FacultyAPI
  public readonly superTeacher: SuperTeacherAPI
  public readonly lo: LOAPI
  public readonly results: ResultsAPI

  constructor(axios: AxiosInstance) {
    this.semester = new SemesterAPI(axios)
    this.teacher = new TeacherApi(axios)
    this.studentTopic = new StudentTopicAPI(axios)
    this.topic = new TopicAPI(axios)
    this.faculty = new FacultyAPI(axios)
    this.superTeacher = new SuperTeacherAPI(axios)
    this.lo = new LOAPI(axios)
    this.results = new ResultsAPI(axios)
  }
}
