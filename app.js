const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
let p1Score = 0;
let p2Score = 0;

p1Button.addEventListener('click',()=>{
    console.log('clicked p1b')
    p1Score += 1
    //same thing as ++
    p1Display.innerText = p1Score
    
})
p2Button.addEventListener('click',()=>{
    console.log('clicked p2b')
    p2Score ++
    //same thing as += 1
    p2Display.innerText = p2Score
})
