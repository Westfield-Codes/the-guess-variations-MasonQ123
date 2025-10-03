/* 0.75-guess-simple.js */
function guessGame(){
let guess = 0;

let answer = Math.floor(Math.random()*100+1);

guess = prompt("Guess a number, 1-100!")

if(guess == answer){
    alert("Correct!");
}
else if(guess > answer){
alert("Too high!");
}
else{
    alert("Too low!");
}
};

/* 1-guess-recursive */
let guess = 0
let answer = Math.foor(Math.random()*100+1);
function guessGame (){
    while(guess != answer){
guess = prompt("Guess a number. 1-100")
if(guess == answer){
    alert("Correct!")
}
else if(guess > answer){
    alert("Too high!")
}
else{
    alert("Too low!")
}
};
};

/* 2-guess-loop.js */
function guessGame (){

answer = Math.floor(Math.random()*100+1);

let guess = 0;

while(guess != answer){

guess = prompt("Guess a number, 1-100");

if (guess == answer){
alert("Correct!");
}

else if (guess > answer){
    alert("Too high!")
}

else if (guess < answer){
    alert("Too low!")
}

else{
    alert("Bad input")
};
};
};


/* 3-guess-loop-quit.js */

function guessGame() {
let guess = 0
let answer = Math.floor(Math.random()*100+1);



while (guess != answer && guess != "q"){
    guess = prompt("Guess a number, 1-100! (or type q to quit");
        if (guess == "q"){
            alert("Quitter!")
        }
        else if(guess == answer){
            alert("Correct!")
        }
        else if(guess > answer){
            alert("Too high!")
        }
        else if(guess < answer){
            alert("Too low!")
        }
        else{
            alert("Bad input")
        }
    }
};

/* 4-guess-play-again.js */
function guessGame(){
  var again = true;
while (again == true) {
  
let guess = 0
let answer = Math.floor(Math.random()*100+1);

while (guess != answer && guess != "q"){
    guess = prompt("Guess a number, 1-100! (or type q to quit");
        if (guess == "q"){
            alert("Quitter!")
        }
        else if(guess == answer){
            alert("Correct!")
        }
        else if(guess > answer){
            alert("Too high!")
        }
        else if(guess < answer){
            alert("Too low!")
        }
        else{
            alert("Bad input")
        }
    }
     again = confirm("Would you like to play again?")
    if (again == false){
        alert("Thanks for playing!")
    }
}
}

/* 4.5-guess-play-again.js */
function guessGame (){

  
var again = true;
while (again == true) {
  guess = 0;
  tries = 0;
  answer = Math.floor(Math.random()*100+1);
  
while (guess != answer && guess != "q" && tries < 10){ {

  guess = prompt("Guess a number, 1-100 or type q to quit");
  tries += 1;
if (guess == "q"){
  alert("Quitter!")
}
else if (tries >= 10){
  alert("Sorry, you've used all your tries. The answer was " + answer);
}
  else if (guess == answer){
    alert("Correct in " + tries + " tries!");
  }

  else if (guess > answer){
      alert("Too high!")
  }

  else if (guess < answer){
      alert("Too low!")
  }

  else{
      alert("Bad Input!")
  }
}
}
again = confirm("Would you like to play again?")
if (again == false){ 
  alert("Thanks for playing!") 
}
}
}

/* 5-guess-quit-again.js */
var plays = 0;

function newGame(){
let again = true;
    while (again == true) {
        if (plays > 0){
        again = confirm("Play again?");
        }
        if (!again) {
            alert("Thanks for playing!");
            break;
        }
        guessGame();
        plays ++;
    }
}



function guessGame(){
guess = 0;
tries = 0;
answer = Math.floor(Math.random()*100+1);

while (guess != answer){
    guess = prompt("Guess a number, 1-100! (or type q to quit)");
    tries += 1;
        if (guess == answer){
            alert("Correct in " + tries + " tries!")
        }
        else if (guess == "q"){
            break
        }
        else if (guess > answer){
            alert("Too high!")
        }
        else if (guess < answer){
            alert("Too low!")
        }
        else{
            alert("Bad Input!")
        }
    }
}