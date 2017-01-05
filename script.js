// Done monitor user keystrokes
// Done watch for the backspaces character
// Done create  counter for backspaces.
// Done Save current streak high score.
// Fixed Not resetting counter to 0 for streak-fix

var counterBs = 0;
var counterNbs = 0;

window.addEventListener('keyup', (e) => {
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
