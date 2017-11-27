/*
 *   OOP Javascript example 1
 */

function baseClass(connectionId, connectionName, isPrivate) {
	var privateVar = "I'm so private i can't even";
	var userName = "";

	this.connectionId = connectionId;
	this.connectionName = connectionName;
	this.isPrivate = isPrivate;

	function getUserName() {
		userName = connectionId + '__' + connectionName;
	}

	this.getPassenger = function() {
		var obj = {};
		if(this.isPrivate) {
			obj.userName = privateVar;
			obj.isPrivate = this.isPrivate;
		} else {
			obj.userName = userName;
			obj.connectionName = this.connectionName;
			obj.connectionId = this.connectionId;
			obj.isPrivate = this.isPrivate;
		}

		return obj;
	};

	getUserName();
}

var baseClassInstance = new baseClass('PAX', 'Traveller11', false);

console.log(baseClassInstance.getPassenger());

/*
* OOP Javascript example 2 - Inheritance (Override & Add to class)
* */

baseClass.prototype.connectedDate = new Date(2017, 11, 1); // You can add new logic to existing object

baseClass.prototype.calculateConnectionTime = function () {
	var todayInMonth= new Date().getDate();
	var connDayInMonth = this.connectedDate.getDate();

	return "The user is connected for " + (todayInMonth - connDayInMonth) + " days";
};

console.log(baseClassInstance.calculateConnectionTime());

/*
 * OOP Javascript example 2 - Inheritance (Prototype chain)
* */

function Animal(name) {
	this.name = name;
}

Animal.prototype.speak = function() {
	console.log("I am the awesome " + this.name);
};

var animal = new Animal('Swansy');
animal.speak();

function Swan(name) {
	Animal.call(this, name);
}

Swan.prototype = new Animal();

var swan = new Swan('Black Swansy');
swan.speak();


/* QUIZ */

function doCalculation(a,b,c) {
	return (a * b) + c;
}

var result = doCalculation(2,3,1);
console.log('doCalculation():' + result);

result = doCalculation("2","3","1");
console.log('doCalculation():' + result);
