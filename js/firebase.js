var Firebase = require("firebase");
var ref = new Firebase("https://blazing-torch-3926.firebaseio.com/");

ref.set({
	name: "Lucas",
	age: 18,
	gender: "male",
})