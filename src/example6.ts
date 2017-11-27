/* Union Types & Type guards */

type StringOrNumber = string | number;

let getItem = function (item: StringOrNumber) {
  if(typeof item === "string") {
    saveToDb(item);
  } else {
    calculateAndSave(item);
  }
};

function saveToDb(item: StringOrNumber) {
  console.log("saved");
}

function calculateAndSave(item: StringOrNumber) {
  console.log("calculated and saved");
}

getItem("stuff");
