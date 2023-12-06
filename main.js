let answer = 0
const MAX_GUESSES = 10;
let guesses = MAX_GUESSES;


function onKeyPress(e) {
	if(e.key === 'Enter'){
		makeGuess();
	}
}

function startGame(){
	answer = Math.floor(Math.random()*100)
	//alert('Game started, guess a number betwee 1 and 100');
	guesses = MAX_GUESSES;
	updateGuesses();
	document.querySelector('#game').style.display = 'block';
	document.querySelector('#setup').style.display = 'none'
}

function makeGuess(){
	let hint = document.querySelector('#hint');
    let guess_box = document.querySelector('input')
	let guess = parseInt(guess_box.value);

	if(guess == answer){
		hint.innerHTML = 'Correct!'
	}else{
		guess_box.value = '';
		let lower = guess > answer;
		let message = 'Wrong! ' + guess + ' was ' + (lower ? 'too high' : 'too low');
		hint.innerHTML = message;
	}
	guesses = guesses-1;
	updateGuesses();
}

function updateGuesses(){
	document.querySelector('#guesses').innerHTML = guesses
}

function giveUp(){
	alert('The answer was ' + answer)
	document.querySelector('#game').style.display = 'none';
	document.querySelector('#setup').style.display = 'block';
}

