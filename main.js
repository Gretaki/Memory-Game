var cardsArray = [
    {'name': 'Abra', 'img': 'img/abra.png' , },
    {'name': 'Bulbasaur', 'img': 'img/bulbasaur.png', },
    {'name': 'Charmander', 'img': 'img/charmander.png', },
    {'name': 'Cubone', 'img': 'img/cubone.png', },
    {'name': 'Eevee', 'img': 'img/eevee.png', },
    {'name': 'Gastly', 'img': 'img/gastly.png', },
    {'name': 'Growlithe', 'img': 'img/growlithe.png', },
    {'name': 'Magikarp', 'img': 'img/magikarp.png', },
    {'name': 'Magnemite', 'img': 'img/magnemite.png', },
    {'name': 'Pikachu', 'img': 'img/pikachu.png', },
    {'name': 'Squirtle', 'img': 'img/squirtle.png', },
    {'name': 'Vulpix', 'img': 'img/vulpix.png', },
];

//dublicate
var gameGrid = cardsArray.concat(cardsArray);

//random
gameGrid.sort(function(){
    return 0.5-Math.random();
});

var game = document.getElementById('game-board');
var grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

for (i = 0; i < gameGrid.length; i++) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = gameGrid[i].name;

    //turn around
    var front = document.createElement('div');
    front.classList.add('front');

    var back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage =  `url(${gameGrid[i].img})`;

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);

};

//clicked
var firstGuess = '';
var secondGuess = '';

var count = 0;
var previousTarget = null;
var delay = 1200;

var match = function(){
    var selected = document.querySelectorAll('.selected');
    for (var i=0; i<selected.length; i++){
        selected[i].classList.add('match');
    }
}

var resetGuesses = function(){
    firstGuess='';
    secondGuess='';
    count=0;
    previousTarget=null;

    var selected = document.querySelectorAll('.selected');
    for (var i=0; i<selected.length; i++){
        selected[i].classList.remove('selected');
    }
}

grid.addEventListener('click', function(event){
    var clicked = event.target;
    if(clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('match') || clicked.parentNode.classList.contains('selected')){
        return;
    }
    if (count<2){
        count++;
        if( count ===1){
            firstGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        } else{
            secondGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add ('selected');
        }
        if (firstGuess !== '' && secondGuess !== ''){
            if (firstGuess===secondGuess){
                match();
                setTimeout(resetGuesses, delay);
            }else{
                setTimeout(resetGuesses, delay);
            }
        }
        previousTarget = clicked;
    }




})









