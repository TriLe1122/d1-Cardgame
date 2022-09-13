import { appState } from "../AppState.js"
import { Trivia } from "../Models/Trivia.js"
import { triviaServer } from "./AxiosService.js"




class TriviasService {

  async getTriviaQuestions() {
    const res = await triviaServer.get('/api.php', {
      params: {
        amount: 10,
        difficulty: 'easy',
        type: 'multiple'
      }
    })
    console.log('this work?', res.data.results);
    appState.trivias = res.data.results.map(rawData => new Trivia(rawData))
  }

}


export const triviasService = new TriviasService()




  // / api.php ? amount = 10 & difficulty=easy& type=multiple