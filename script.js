const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPostion = square[Math.floor(Math.random() * 9)]
    randomPostion.classList.add('mole')

    // assign the id of the randomPosition to hit Position for us to use later
    hitPosition = randomPostion.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result = result + 1;
            score.textContent = result;
        }
    })
})


function moveMole() {
    let timerID = null;
    timerID = setInterval(randomSquare, 500)
}

moveMole();

function countDown(params) {
    currentTime--
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(timerID);
        alert(`GAME OVER! ${result} Thats all you got BITCH!`);
    }
}

let timerID = setInterval(countDown, 1000);


