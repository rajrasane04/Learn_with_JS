// In this game , user will have to guess the number generated by the system between 1 to 10
// - program will keep asking for input until user guess it correct or they say 'Quit' .

let max = prompt("Enter the maximum number you want to guess with!");

let ans = Math.floor(Math.random()*max+1);
// console.log(ans);

let guess = prompt("Guess the number");

while(true){
    if((guess=="Quit") || (guess=="quit")){
        console.log("Quitting App...");
        break;
    }

    if(guess==ans){
        console.log("Congrats!...You have guessed it right!...Random number was",ans);
        break;
    }
    else if(guess<ans){
        guess = prompt("hint : Guess was too small , Pls try again");
    }
    else{
        guess = prompt("hint : Guess was too large , Pls try again");
    }
}