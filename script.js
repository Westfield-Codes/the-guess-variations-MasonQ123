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