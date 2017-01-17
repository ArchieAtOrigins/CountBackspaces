var counterBs = 0;
var counterNbs = 0;
var text = document.getElementById("text");

document.getElementById('backspace').innerHTML = "Click inside the text box and start typing when ready.";

text.addEventListener('keyup', (e) => {
	const keyName = e.key;
	if (keyName === 'Backspace') {
		counterBs += 1;
		document.getElementById('backspace').innerHTML = "You have used the backspace/delete key " + counterBs + " times";
		document.getElementById('noBackspace').innerHTML = "Whoops! Damn!";
		counterNbs = 0;
	} else {
		counterNbs += 1;
		document.getElementById('noBackspace').innerHTML = "Your streak is " + counterNbs + " characters without hitting the backspace/delete key!";
			highscore();

	}
})
	var reSet = document.getElementById("buttonReset");
	reSet.addEventListener('click', reset);
	
	function reset() {
		text = "";
		document.getElementById('backspace').innerHTML = "Click inside the text box and start typing when ready.";
		document.getElementById('noBackspace').innerHTML = "";
		document.getElementById('text').value = "";
	}

	var highscore = function() {
		var currentScore = counterNbs;
		var highScore = 0;
		document.getElementById("currentScore").innerHTML = currentScore;
		document.getElementById("highscore").innerHTML = highScore;

		if (currentScore > highScore) {
			highScore = currentScore;
			document.getElementById("highscore").innerHTML = currentScore
		} else {
			document.getElementById("highscore").innerHTML = highScore;
		}
	}
	window.onload = highscore();

