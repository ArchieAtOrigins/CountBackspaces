// Don't include first key input. Maybe have a 'start button'
// Keep track of the character entered before backspace or deleted by backspace to detect patterns of error.

var counterBs = 0;
var counterNbs = 0;
var text = document.getElementById("text");

text.addEventListener('keyup', (e) => {
	const keyName = e.key;
	if (e.key === 'Backspace') {
		counterBs += 1;
		document.getElementById('backspace').innerHTML = "You have used the backspace/delete key " + counterBs + " times";
		counterNbs = 0;
		console.log(counterBs);
		console.log(keyName);
	} else {
		counterNbs += 1;
		document.getElementById('noBackspace').innerHTML = "Your streak is " + counterNbs + " characters without hitting the backspace/delete key!";
	}
})
