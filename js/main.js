var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkforMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
}
var flipCard = function(cardId) {
	console.log("User flipped "+cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkforMatch();
}
flipCard(0);
flipCard(2);