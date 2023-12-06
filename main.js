let answer = 0
let guesses = 5;

function startGame(){
	answer = Math.floor(Math.random()*100)
	alert('Game started, guess a number betwee 1 and 100');
	guesses = 5
	updateGuesses();
}

function makeGuess(){
    let guess = document.querySelector('input').value
	guess = parseInt(guess)
	if(guess == answer){
		alert('Correct!')
	}else{
		alert('Wrong')
	}
	guesses = guesses-1;
	updateGuesses();
}

function updateGuesses(){
	document.querySelector('#guesses').innerHTML = guesses
}

function giveUp(){
	alert('The answer was ' + answer)
}

