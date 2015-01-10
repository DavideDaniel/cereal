var beatles = ["John", "Paul", "George", "Ringo"];
var stuff = [1, "John"]

beatles[0] //John
beatles[1] = "Sam" // ["John", "Sam", "George", "Ringo"]
beatles.push("Paul"); // ["John", "Sam", "George", "Ringo", "Paul"]

for (var i = 0; i < beatles.length; i++) {
	console.log(beatles[i]);
}