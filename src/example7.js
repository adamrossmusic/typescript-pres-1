"use strict";
/* Super keyword & Namespaces */
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
var Controllers;
(function (Controllers) {
    var MainController = /** @class */ (function () {
        function MainController() {
        }
        MainController.prototype.log = function () { console.log('hello world'); };
        return MainController;
    }());
    var ChildController = /** @class */ (function (_super) {
        __extends(ChildController, _super);
        function ChildController() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ChildController.prototype.logWorld = function () { _super.prototype.log.call(this); };
        ;
        return ChildController;
    }(MainController));
    var loggingTheWorld = new ChildController();
    loggingTheWorld.logWorld();
})(Controllers || (Controllers = {}));
