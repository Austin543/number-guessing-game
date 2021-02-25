var number = ~~(Math.random() * 100 ) + 1;
var numberOfGuesses = 0

var submit = () => {
	var input = document.getElementById('input').value;
    var output = document.getElementById('output');
	
    if(isNaN(input) || input == ''){
		output.innerHTML = 'That\'s not a number :('
        return
    } else if(input < 1 || input > 100) {
		output.innerHTML = 'The number is between 1 and 100!'
        return
    } 
    document.getElementById('input').value = '';
    numberOfGuesses++
    numberGuess.innerHTML = `${numberOfGuesses} Guess${numberOfGuesses === 1 ? '' : 'es'}! `;
    
    if(input == number){
		output.innerHTML = `You win! Great Job! The number was ${number}`;
        document.getElementById('submit').disabled = true;
        return
    };
    output.innerHTML = input < number ? 'Too low!' : 'Too high!';
    setTimeout(function() {(document.getElementById('input').focus());}, 1); 
};

var reset = () => {
	number = ~~(Math.random() * 100 ) + 1;
    output.innerHTML = '';
    numberGuess.innerHTML = '';
    numberOfGuesses = 0
    document.getElementById('submit').disabled = false;
    setTimeout(function() {(document.getElementById('input').focus());}, 1); 
};
