var counterBs = 0;
var counterNbs = 0;
var text = document.getElementById("text");
var bs = document.getElementById('backspace')
var nbs =document.getElementById('noBackspace')
var reSet = document.getElementById("buttonReset");

// highscore vars
// var highScore = counterNbs++;
// var currentScore = counterNbs;


bs.innerHTML = "Click inside the text box and start typing when ready.";

// Add event listener for the keyup on Backspace and to adjust counter value.

document.getElementById('backspace').innerHTML = "Click inside the text box and start typing when ready.";

text.addEventListener('keyup', (e) => {
	const keyName = e.key;
	if (keyName === 'Backspace') {
		counterBs += 1;
		bs.innerHTML = "You have used the backspace/delete key " + counterBs + " times";
		nbs.innerHTML = "Whoops! Damn!";
		counterNbs = 0;
	} else {
		var currentScore = counterNbs += 1;
		nbs.innerHTML = "Your streak is " + counterNbs + " characters without hitting the backspace/delete key!";
		counterNbs += 1;
		document.getElementById('noBackspace').innerHTML = "Your streak is " + counterNbs + " characters without hitting the backspace/delete key!";
			highscore();
	}
})
	


var highScore = counterNbs;
document.getElementById('highscore').innerHTML = "Your highscore is " + highScore + "!";;
	
// Add listener for Reset button.	
reSet.addEventListener('click', reset);

// Add reset function to allow user to clear textarea and value and start over.

var reSet = document.getElementById("buttonReset");
	reSet.addEventListener('click', reset);
	
function reset() {
	bs.innerHTML = "Click inside the text box and start typing when ready."; // this is a repeat. how to make it DRY.
	counterBs = 0;
	counterNbs = 0;
	nbs.innerHTML = "";
	text.value = "";
}
