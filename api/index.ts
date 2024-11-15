import type { AxiosInstance } from 'axios'
import { SemesterAPI } from '~/api/semester'
import { AdminApi } from '~/api/admin'
import { StudentTopicAPI } from '~/api/student-topic'
import { StudentInternAPI } from '~/api/student-intern'
import { TopicAPI } from '~/api/topic'
import { FacultyAPI } from '~/api/faculty'
import { SuperTeacherAPI } from '~/api/super-teacher'
import { LOAPI } from '~/api/lo'
import { ResultsAPI } from '~/api/results'
import { TeacherApi } from '~/api/teacher'
import { TeacherGroupAPI } from '~/api/teacher-group'
import { InternAPI } from '~/api/intern'
export class Api {
  public readonly semester: SemesterAPI
  public readonly teacher: TeacherApi
  public readonly studentTopic: StudentTopicAPI
  public readonly studentIntern: StudentInternAPI
  public readonly topic: TopicAPI
  public readonly faculty: FacultyAPI
  public readonly superTeacher: SuperTeacherAPI
  public readonly lo: LOAPI
  public readonly results: ResultsAPI
  public readonly admin: AdminApi
  public readonly teacherGroup: TeacherGroupAPI
  public readonly intern: InternAPI

  constructor(axios: AxiosInstance) {
    this.semester = new SemesterAPI(axios)
    this.teacher = new TeacherApi(axios)
    this.studentTopic = new StudentTopicAPI(axios)
    this.studentIntern = new StudentInternAPI(axios)
    this.topic = new TopicAPI(axios)
    this.faculty = new FacultyAPI(axios)
    this.superTeacher = new SuperTeacherAPI(axios)
    this.lo = new LOAPI(axios)
    this.results = new ResultsAPI(axios)
    this.admin = new AdminApi(axios)
    this.teacherGroup = new TeacherGroupAPI(axios)
    this.intern = new InternAPI(axios)
  }
}
