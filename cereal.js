//prompt for # of cereal names
//var yum = process.argv[2];
//var yum = parseInt(prompt("How many cereals would you like to try?"));

// declare newcereal for cereal name suggestions

var cereal1 = ["Apple", "Cap'n", "Cinammon", "Cocoa", "Frosted", "Fruit", "Honey Bunches of", "Raisin", "Shredded", "Toasted"];
var cereal2 = ["Bran", "Crunch", "Crisp", "Flakes", "Jacks", "Krispies", "Loops", "Pebbles", "Pops", "Puffs"];
// empty newcereal for filling
var newcereal = [];

}

//create newcereal with random items from the first list and second list

		for (i = 0; i < cereal1.length; i++) {
	
			var z = 0;
		
				for (z = 0; z < cereal2.length; z++) {
					var x = cereal1[i] + " " + cereal2[z];
					newcereal.push(x)

			// function shuffle(newcereal) {
			//   var n = newcereal.length, t, rnc ;

			//   // While there remain elements to shuffle...
			//   while (0 !== n) {

			//     // Pick a remaining element...
			//     rnc = Math.floor(Math.random() * n);
			//     n -= 1;

			//     // And swap it with the current element.
			//     t = newcereal[currentIndex];
			//     newcereal[n] = newcereal[rnc];
			//     newcereal[rnc] = t;
			//   }

			//   return newcereal;
			// }
		

		}
	}
//print results to terminal

