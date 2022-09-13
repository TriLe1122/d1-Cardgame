

export class Trivia {

  constructor(data) {
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correct_answer = data.correct_answer
    this.incorrect_answers = data.incorrect_answers
  }


  get TriviaTemplate() {
    return /*html*/ `
    <div class="col-6 my-3">
          <div class="card h-100">
            <div class="card-body">
              <h3>${this.category}</h3>
              <p>${this.difficulty}</p>
              <p class="fs-2 fw-3">${this.question}</p>
            </div>
          </div>
        </div>
    
    `
  }
}


