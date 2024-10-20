import { BaseApi } from '~/api/base'
export class ResultsAPI extends BaseApi {
  getResultTopic() {
    return this.get('/results')
  }
}
