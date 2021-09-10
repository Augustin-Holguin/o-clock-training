// function to generate a random number between 1 and 6
var randomNumber = function(min, max) {
    maxDifference = max - min;
    return Math.round((Math.random() * maxDifference) + min);
}

// function to create dice
var createDice = function(whichPlayer) {
    var div = document.createElement('div');
    div.classList.add('dice');

    var randNum = randomNumber(1, 6);
    var divWhereToPlay = document.getElementById(whichPlayer);
    divWhereToPlay.appendChild(div);
    div.style.backgroundPositionX = ((randNum - 1) * -100) + 'px';
}

// function to get number of dice to throw + call the the createDice() function
var handler = function(event) {
    event.preventDefault();

    var input = document.getElementById('inputNumber');
    var diceToThrow = parseInt(input.value, 10);

    var player = document.getElementById('player');
    var dealer = document.getElementById('dealer');
    player.innerHTML = '';
    dealer.innerHTML = '';

    for (var i = 0; i < diceToThrow; i++){
        setTimeout(function() {
            createDice('player');
            setTimeout(function() {
                createDice('dealer');
            }, i * 350);
        }, i * 300);
    } 
}

// add an event listener on the submit
var submit = document.getElementById('controls');
submit.addEventListener('submit', handler);

