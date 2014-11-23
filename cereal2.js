//argument to provide number of suggestions

var input = parseInt(process.argv[2]);
var c1 = ["Apple", "Cap'n", "Cinammon", "Cocoa", "Frosted", "Fruit", "Honey Bunches of", "Raisin", "Shredded", "Toasted"];
var c2 = ["Bran", "Crunch", "Crisp", "Flakes", "Jacks", "Krispies", "Loops", "Pebbles", "Pops", "Puffs"];
var c3 = [];
var c4 = [];

var Random = Math.floor(Math.random()*(c3.length+1));


//loop the loop as many times as input
for (y=0; y<input; y++) {

// for loop to combine the 2 arrays into 1
for (var i = 0; i < c1.length; i++) {
	var z = 0;
	for (z = 0; z < c2.length; z++) {
		c3.push(c1[i] + " " + c2[z]);
			





 


// tempcopy = c3.slice(0);
// if (tempcopy.length<1) { tempcopy = c3.slice(0); }
// 	var Random = Math.floor(Math.random()*(tempcopy.length));
// 	var cereal = tempcopy[Random];
// 	tempcopy.splice(Random, 1);
	// c4.push(tempcopy) 
	

}

};

// randomize the array 
var s = c3.length, t, i;

  // While there remain elements to shuffle…
  while (s) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * s--);

    // And swap it with the current element.
    t = c3[s];
    c3[s] = c3[i];
    c3[i] = t;

  }




 



  
 // }
 // shuffle(c3)
// if () (var i = 0; i < i; i++) {
// for (y = input; input < c3; y++) {

// };
// 	if (i<c3) {
// 		return c4
// 	}

 if (input > c3.length) {
 	console.log("Too many! Pick fewer")
 }
 else
 console.log(c3[input])

}
