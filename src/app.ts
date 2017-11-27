/*
 *  Typescript basic example part 1.
 * */

interface ITestInferface {
  id : number;
  name: string;
  testFn(
    testArray: number[]
  ) : void;
}

class testClass implements ITestInferface {
  public id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  testFn(testArray: number[]) {
    if(testArray[0] === 1337) {
      console.log('This is ' + this.id + '  ' + this.name);
    } else {
      console.log('This is not ' + this.name + '  ' + this.id);
    }
  }
}

let testClassInstance = new testClass(111, "A Nice Person" );
testClassInstance.testFn([1337, 1338]);

/*
 *  Typescript basic example 2. -- With Class modifiers
 * */


interface IBaseClassInterface {
  connectionId: string,
  connectionName: string,
  isPrivate: boolean,
  getUserName(): void
  getPassenger(): any
}

class BaseClass implements IBaseClassInterface {
  private privateVar: string = "I'm so private i can't even";
  private userName: string = "";
  public connectionId: string;
  public connectionName: string;
  public isPrivate: boolean;

  constructor(connectionId: string, connectionName: string, isPrivate: boolean )  {
    this.connectionId = connectionId;
    this.connectionName = connectionName;
    this.isPrivate = isPrivate;

    this.getUserName();
  }

  getUserName = function () : void {
    this.userName = this.connectionId + '__' + this.connectionName;
  };

  getPassenger = function (): any {
    let obj: any = {};
    if(this.isPrivate) {
      obj.userName = this.privateVar;
      obj.isPrivate = this.isPrivate;
    } else {
      obj.userName = this.userName;
      obj.connectionName = this.connectionName;
      obj.connectionId = this.connectionId;
      obj.isPrivate = this.isPrivate;
    }

    return obj;
  }
}

let wispTravaller = new BaseClass('PAX', 'Traveller11', false);

console.log(wispTravaller.getPassenger());

/* Extending - Inheriting from last example */

class ExtendedClass extends BaseClass {
  nameLength = function () : string {
    if(!this.isPrivate) {
      return this.userName.length.toString();
    } else {
      return "If I tell you, i have to kill you!";
    }
  }
}

let extendedClassInstance = new ExtendedClass("PAX", "Schoocher", true);

console.log(extendedClassInstance.getPassenger());
console.log(extendedClassInstance.nameLength());

/* Enums example */

//String enums avaiilable from TS 2.4+

enum vodEventStates {
  abort = "ABORT",
  canPlay = "CAN_PLAY",
  ended = "ENDED",
  error = "ERROR",
  seekDelay = "SEEK_DELAY",
  pause = "PAUSE",
  ready = "READY",
  stop = "STOP",
  waiting = "WAITING"
}

enum wispPackages {
  standard,
  threeHour,
  fullFlight
}

console.log(vodEventStates.abort);
console.log(wispPackages.standard);
console.log(wispPackages[0]);


/* Class modifiers*/

class AccessModifiersClass {
  private userLocation: string = "Budapest";
  public score: number;
  public rank: string;
  protected registrationDate: any = new Date(2017, 1, 1);
  readonly id: number = 2515;
  static isPublicProfile : boolean = true;

  constructor(score: number) {
    this.score = score;

    this.setUserRank();
  }

  setUserRank = function () {
    if(this.score > 100) {
      this.rank = "rookie"
    } else if(this.score > 1000) {
      this.rank = "pilot"
    } else {
      this.rank = "chief"
    }
  }

}

let accessModifiersClass = new AccessModifiersClass(1004);

const userRank = accessModifiersClass.rank;

/* TYPE ALIASES */

type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === "ease-in") {
      // ...
    }
    else if (easing === "ease-out") {
    }
    else if (easing === "ease-in-out") {
    }
    else {
      // error! should not pass null or undefined.
    }
  }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
//button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here

/* Union Types & Type guards */

type StringOrNumber = string | number;

let getItem = function (item: StringOrNumber) {
  if(typeof item === "string") {
    saveToDb(item);
  } else {
    calculateAndSave(item);
  }
};

function saveToDb(item) {
  console.log("saved");
}

function calculateAndSave(item) {
  console.log("calculated and saved");
}

getItem("stuff");

/* Super keyword & Namespaces */

module Controllers {
  class MainController {
    log() { console.log('hello world'); }
  }

  class ChildController extends MainController {
    logWorld() { super.log() };
  }

  let loggingTheWorld = new ChildController();

  loggingTheWorld.logWorld();
}