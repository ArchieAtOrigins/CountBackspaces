var counterBs = 0;
var counterNbs = 0;
var text = document.getElementById("text");
var currentScore = counterBs;
var highScore = 0;

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

	document.addEventListener('click', reset);
	function reset() {
		text = "";
		document.getElementById('backspace').innerHTML = "Click inside the text box and start typing when ready.";
		document.getElementById('noBackspace').innerHTML = "";
		document.getElementById('text').value = "";
	}

	function highscore () {
		if (currentScore > highScore) {
			highScore = currentScore;
			document.getElementById("highscore").innerHTML = currentScore
		} else {
			document.getElementById("highscore").innerHTML = highScore;
		}
	}

