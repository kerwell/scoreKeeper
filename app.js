const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;

p1Button.addEventListener('click',()=>{
    console.log('clicked p1b')
    if (p1Score !== winningScore){
        p1Score += 1
        //same thing as ++
        p1Display.textContent.Content = p1Score
        //innerText and textContent or similar but remember, innerText only displays
        //the visible text to the viewer, nothing hidden.
    };
    
})
p2Button.addEventListener('click',()=>{
    console.log('clicked p2b')
    if (p1Score !== winningScore){
        p2Score ++
        //same thing as ++
        p2Display.textContent.Content = p2Score
    };
})
