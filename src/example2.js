"use strict";
/*
 *  Typescript basic example 2. -- With Class modifiers
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
