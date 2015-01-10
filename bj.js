var card = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack ", "Queen ", "King ", "Ace "];
var suits = ["Diamonds", "Hearts", "Spades", "Clubs"];
var deck = [];
var Ace =  1
var face = 10
var cardValue = "";
 
	for (i=0; i<card.length; i++) {
		
		var s = 0;
		for (s=0; s<suits.length; s++){
			var c = card[i] + " of " + suits[s];
			deck.push(c);

		// var d = 0;

		// var newdeck = "";

		for (d=0; d<deck.length; d++) {	
		var randocard = deck[Math.floor(Math.random() * (deck.length -1)+1)];	
		deck.push(newdeck)
		console.log(newdeck);


			}
	
	//console.log(deck)
			
	
		}

	

		
	
	
	


	//}
	
	//var randocard = deck[Math.floor(Math.random() * (deck.length -1)+1)];
		
	//if (randocard1 === randocard2)

	//console.log(randocard + randocard)

	