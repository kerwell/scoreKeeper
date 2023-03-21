const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#resetBtn')

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener('click',()=>{
    console.log('clicked p1b')
    if(!isGameOver){
        p1Score += 1
        //same thing as ++
        if(p1Score === winningScore){
            isGameOver = true;
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
        }
        p2Display.textContent = p2Score
        //innerText and textContent or similar but remember, innerText only displays
        //the visible text to the viewer, nothing hidden.
    }
    
})

resetButton.addEventListener('click',()=>{
    console.log('clicked reset btn')
    if(!isGameOver || isGameOver === true){
        p1Score = 0;
        p2Score = 0;
        p1Display.textContent = p1Score
        p2Display.textContent = p2Score
    }
    isGameOver = false;
})