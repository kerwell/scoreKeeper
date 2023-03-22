const player1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const player2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}
const resetButton = document.querySelector('#resetBtn')
const winningScoreSelect = document.querySelector('#playTo')
let winningScore = 3;
let isGameOver = false;

const updateScores = (player, opponent)=>{
    if(!isGameOver){
        player.score += 1
        //same thing as ++
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score
        //innerText and textContent or similar but remember, innerText only displays
        //the visible text to the viewer, nothing hidden.
    }
}

player1.button.addEventListener('click',()=>{
    updateScores(player1, player2)
    //player1 is player and player2 is opponent
})
player2.button.addEventListener('click',()=>{
    updateScores(player2, player1)
    //player2 is player and player1 is opponent
})

const reset = ()=>{
    for(let player of [player1,player2]){
        //made both players into an array to loop the changes with all players
        player.score = 0
        player.display.textContent = player.score
        player.display.classList.remove('has-text-success','has-text-danger');
        player.button.disabled = false
        isGameOver = false
    }
}

resetButton.addEventListener('click', reset)
//we reset when the event is triggered

winningScoreSelect.addEventListener('change',function (){
    winningScore = parseInt(this.value);
    //we need to use 'parseInt()' method to make a string into a number.
    //bc the number is locked behind 'this.value' as a string, where 'this' is the 
    //'winningScoreSelect' object.
    reset();
    //here we reset within the anonymous function.
})