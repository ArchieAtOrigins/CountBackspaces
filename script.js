// Don't include first key input. Maybe have a 'start button'
// Keep track of the character entered before backspace or deleted by backspace to detect patterns of error.
// Setup a Reset Button
	// Clear the text area
	// 

var counterBs = 0;
var counterNbs = 0;
var text = document.getElementById("text");

document.getElementById('backspace').innerHTML = "Click inside the text box and start typing when ready.";

text.addEventListener('keyup', (e) => {
	const keyName = e.key;
	if (e.key === 'Backspace') {
		counterBs += 1;
		document.getElementById('backspace').innerHTML = "You have used the backspace/delete key " + counterBs + " times";
		document.getElementById('noBackspace').innerHTML = "Whoops! Damn!";
		counterNbs = 0;
	} else {
		counterNbs += 1;
		document.getElementById('noBackspace').innerHTML = "Your streak is " + counterNbs + " characters without hitting the backspace/delete key!";
	}
})

var reset = document.addEventListener("buttonReset", reset);

function reset() {
text = "";
document.getElementById('backspace').innerHTML = "Click inside the text box and start typing when ready.";
document.getElementById('noBackspace').innerHTML = "";
}