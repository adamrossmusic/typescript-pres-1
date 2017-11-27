"use strict";
/* Enums example */
//String enums avaiilable from TS 2.4+
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
console.log(wispPackages[0]);
