"use strict";
/*
 *  Typescript basic example part 1.
 * */
var testClass = /** @class */ (function () {
    function testClass(id, name) {
        this.id = id;
        this.name = name;
    }
    testClass.prototype.testFn = function (testArray) {
        if (testArray[0] === 1337) {
            console.log('This is ' + this.id + '  ' + this.name);
        }
        else {
            console.log('This is not ' + this.name + '  ' + this.id);
        }
    };
    return testClass;
}());
var testClassInstance = new testClass(111, "A Nice Person");
testClassInstance.testFn([1337, 1338]);
