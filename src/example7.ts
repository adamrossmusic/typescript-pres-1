/* Super keyword & Namespaces */

module Controllers {
  class MainController {
    public log() { console.log('hello world'); }
  }

  class ChildController extends MainController {
    logWorld() { super.log() };
  }

  let loggingTheWorld = new ChildController();

  loggingTheWorld.logWorld();
}