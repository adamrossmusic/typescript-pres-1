"use strict";
/*
 *  Typescript basic example part 1.
 * */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var BaseClass = /** @class */ (function () {
    function BaseClass(connectionId, connectionName, isPrivate) {
        this.privateVar = "I'm so private i can't even";
        this.userName = "";
        this.getUserName = function () {
            this.userName = this.connectionId + '__' + this.connectionName;
        };
        this.getPassenger = function () {
            var obj = {};
            if (this.isPrivate) {
                obj.userName = this.privateVar;
                obj.isPrivate = this.isPrivate;
            }
            else {
                obj.userName = this.userName;
                obj.connectionName = this.connectionName;
                obj.connectionId = this.connectionId;
                obj.isPrivate = this.isPrivate;
            }
            return obj;
        };
        this.connectionId = connectionId;
        this.connectionName = connectionName;
        this.isPrivate = isPrivate;
        this.getUserName();
    }
    return BaseClass;
}());
var wispTravaller = new BaseClass('PAX', 'Traveller11', false);
console.log(wispTravaller.getPassenger());
/* Extending - Inheriting from last example */
var ExtendedClass = /** @class */ (function (_super) {
    __extends(ExtendedClass, _super);
    function ExtendedClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nameLength = function () {
            if (!this.isPrivate) {
                return this.userName.length.toString();
            }
            else {
                return "If I tell you, i have to kill you!";
            }
        };
        return _this;
    }
    return ExtendedClass;
}(BaseClass));
var extendedClassInstance = new ExtendedClass("PAX", "Schoocher", true);
console.log(extendedClassInstance.getPassenger());
console.log(extendedClassInstance.nameLength());
/* Enums example */
var vodEventStates;
(function (vodEventStates) {
    vodEventStates["abort"] = "ABORT";
    vodEventStates["canPlay"] = "CAN_PLAY";
    vodEventStates["ended"] = "ENDED";
    vodEventStates["error"] = "ERROR";
    vodEventStates["seekDelay"] = "SEEK_DELAY";
    vodEventStates["pause"] = "PAUSE";
    vodEventStates["ready"] = "READY";
    vodEventStates["stop"] = "STOP";
    vodEventStates["waiting"] = "WAITING";
})(vodEventStates || (vodEventStates = {}));
var wispPackages;
(function (wispPackages) {
    wispPackages[wispPackages["standard"] = 0] = "standard";
    wispPackages[wispPackages["threeHour"] = 1] = "threeHour";
    wispPackages[wispPackages["fullFlight"] = 2] = "fullFlight";
})(wispPackages || (wispPackages = {}));
console.log(vodEventStates.abort);
console.log(wispPackages.standard);
console.log(wispPackages["standard"]);
