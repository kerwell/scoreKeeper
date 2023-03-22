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

p1Button.addEventListener('click',()=>{
    console.log('clicked p1b')
    if(!isGameOver){
        p1Score += 1
        //same thing as ++
        if(p1Score === winningScore){
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1Score
        //innerText and textContent or similar but remember, innerText only displays
        //the visible text to the viewer, nothing hidden.
    }
    
})
p2Button.addEventListener('click',()=>{
    console.log('clicked p2b')
    if(!isGameOver){
        p2Score += 1
        //same thing as ++
        if(p2Score === winningScore){
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score
        //innerText and textContent or similar but remember, innerText only displays
        //the visible text to the viewer, nothing hidden.
    }
    
})

const reset = ()=>{
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score
    p2Display.textContent = p2Score
    isGameOver = false;
    p1Display.classList.remove('has-text-success','has-text-danger');
    p2Display.classList.remove('has-text-success','has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}

resetButton.addEventListener('click', reset)
//we reset when the event is triggered

winningScoreSelect.addEventListener('change',function (){
    console.log('changed winningScoreSelect btn')
    winningScore = parseInt(this.value);
    //we need to use 'parseInt()' method to make a string into a number.
    //bc the number is locked behind 'this.value' as a string, where 'this' is the 
    //'winningScoreSelect' object.
    reset();
    //here we reset within the anonymous function.
})
