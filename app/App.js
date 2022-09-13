import { TriviasController } from "./Controllers/TriviasController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  triviasController = new TriviasController()
}

window["app"] = new App();
