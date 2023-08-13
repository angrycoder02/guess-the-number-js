'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let score=20;
var count=0;
let secretNumber = Math.trunc(Math.random()*20) +1;
let highestScore=0;
const displayMessage = function(message){
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',function game (){
    count+=1;
    console.log('count is : ' +  count);
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess , typeof guess);
//when no input is given
if(!guess){
    displayMessage('No Number entered!');
}
// when player wins
else if (guess === secretNumber){
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number!');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.score').style.height = '20';
    if(score > highestScore){
        highestScore=score;
        document.querySelector('.highscore').textContent = highestScore;
    }
}
//when the guess is wrong
else if(guess!==secretNumber){
    if (score > 0){ 
        score--;
        document.querySelector('.score').textContent = score;
       // document.querySelector('.message').textContent = guess>secretNumber ? 'Guess is Too High!':'Guess is Too Low!';
       displayMessage( guess>secretNumber ? 'Guess is Too High!':'Guess is Too Low!');
       
        }
        else{
            displayMessage('You lost the game! Game over! Try again.');
            document.querySelector('.score').textContent=0;
        }    

}


/*when guess is too high
else if(guess>secretNumber){
    score--; 
   if (score > 0){ 
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Guess is Too High!';
    }
    else{
        document.querySelector('.message').textContent ='You lost the game! Game over! Try again.';
        document.querySelector('.score').textContent=0;
    }

  //when guess is too low      
}
else if(guess<secretNumber){
    score--; 
    if (score > 0){
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Guess is Too Low!';  
     
    }         
    else{
        document.querySelector('.message').textContent ='You lost the game! Game over! Try again.';
        document.querySelector('.score').textContent=0;
    }   

} 
*/
});

document.querySelector('.again').addEventListener('click',function reset(){
score = 20;
secretNumber = Math.trunc(Math.random()*20) +1;
displayMessage('Start guessing...');
document.querySelector('.score').textContent=score; 
document.querySelector('.number').textContent='?';
document.querySelector('body').style.backgroundColor='#222';
document.querySelector('.guess').value='';
document.querySelector('.number').style.width='15rem';
});

   