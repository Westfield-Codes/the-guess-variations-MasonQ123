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