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
