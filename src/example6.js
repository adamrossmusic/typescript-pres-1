"use strict";
/* Union Types & Type guards */
var getItem = function (item) {
    if (typeof item === "string") {
        saveToDb(item);
    }
    else {
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
