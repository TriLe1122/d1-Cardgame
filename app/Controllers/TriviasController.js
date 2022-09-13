import { appState } from "../AppState.js";
import { triviaServer } from "../Services/AxiosService.js";
import { triviasService } from "../Services/TriviasService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function drawTrivias() {
  let template = ''
  appState.trivias.forEach(t => template += t.TriviaTemplate)
  setHTML('api-trivia', template)
}

export class TriviasController {

  constructor() {
    appState.on('trivias', drawTrivias)
    this.getTriviaQuestions()
  }


  async getTriviaQuestions() {
    try {
      await triviasService.getTriviaQuestions()
    } catch (error) {
      console.log(error);
      Pop.error(error)
    }
  }

}