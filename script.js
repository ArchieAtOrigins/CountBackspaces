// monitor user keystrokes
// watch for the backspaces character
// create  counter for backspaces.
var counterBs = 0;
var counterNbs = 0;

window.addEventListener('keyup', (e) => {
	const keyName = e.key;
	if (e.key === 'Backspace') {
		counterBs += 1;
		console.log(counterBs);
		console.log(keyName);
	} else {
		counterNbs += 1;
		console.log(" consecutive correct entries!")
		if (e.key === 'Backspace') {
			counterNbs = 0;
		}
	}
})
