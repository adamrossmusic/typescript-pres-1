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