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

