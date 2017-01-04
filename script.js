// monitor user keystrokes
// watch for the backspaces character
// create  counter for backspaces.
// Save current streak high score.


var counterBs = 0;
var counterNbs = 0;

window.addEventListener('keyup', (e) => {
	const keyName = e.key;
	if (e.key === 'Backspace') {
		counterBs += 1;
		document.getElementById('backspace').innerHTML = "You have use the backspace/delete key " + counterBs + " times";
		console.log(counterBs);
		console.log(keyName);
	} else {
		counterNbs += 1;
		document.getElementById('noBackspace').innerHTML = "Your streak is " + counterNbs + " characters without hitting the backspace/delete key!";
		console.log(" consecutive correct entries!")
		if (e.key === 'Backspace') {
			counterNbs = 0;
		}
	}
})
