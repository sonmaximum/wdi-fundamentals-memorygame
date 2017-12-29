//bonus addition, function to randomize cards before loading board
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"}
];

cards = shuffle(cards);

var cardsInPlay = [];
var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		tries++;
		document.getElementById("tries").textContent = tries;
		if (cardsInPlay[0] === cardsInPlay[1]) {
			matches++
			document.getElementById("matches").textContent = matches;
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
}

var tries = 0
var matches = 0

/* Give the browser time to redraw the flipped card 
before showing the check for match alert */
var checkForMatchWait = function(){
	setTimeout(checkForMatch, 50);
}
var flipCard = function() {
	if (cardsInPlay.length ===2 ) {
		return;
	}
	var cardId = this.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute("src", cards[cardId].cardImage);
	checkForMatchWait();
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

var resetBoard = function(){
	cardsInPlay = [];
	var cardImgs = document.querySelectorAll("img");
	for (var i = 0; i < cardImgs.length; i++) {
		cardImgs[i].setAttribute("src", "images/back.png");
	}
}

document.querySelector("button").addEventListener("click", resetBoard);

createBoard();