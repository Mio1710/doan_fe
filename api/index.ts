import type { AxiosInstance } from 'axios'
import { SemesterAPI } from '~/api/semester'

export class Api {
  public readonly semester: SemesterAPI

  constructor(axios: AxiosInstance) {
    this.semester = new SemesterAPI(axios)
  }
}
