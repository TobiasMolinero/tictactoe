
const pressStartAdvice = document.querySelector('.press-start-advice')
const btnPlay = document.querySelector('#btnPlay')
const playerTurn = document.querySelector('.player-turn')
let playerTurnValue = document.querySelector('#player-turn-value')
const btnReset = document.querySelector('#btnReset')
const btnExit = document.querySelector('#btnExit')
let gridGame = document.querySelector('.grid-container')



let isPlayerOne = true;
let casillas = document.getElementsByClassName("grid-box")
let resultado = document.querySelector(".result")

for(let i = 0; i < casillas.length; i++){
    casillas[i].addEventListener('click', userMove)
}

playerTurn.hidden = true
gridGame.style.display = 'none'
btnReset.hidden = true
btnExit.hidden = true
playerTurnValue.innerHTML = isPlayerOne ? 'X' : 'O'

const startGame = () => {
    btnPlay.hidden = true
    pressStartAdvice.hidden = true
    playerTurn.hidden = false
    gridGame.style.display = 'grid'
    btnReset.hidden = false
    btnExit.hidden = false
}

function userMove(e){
    let valorCasilla = e.target.innerHTML;
    if(!valorCasilla.length){
        e.target.innerHTML = isPlayerOne ? 'X' : 'O'
        isPlayerOne = !isPlayerOne;
        playerTurnValue.innerHTML = isPlayerOne ? 'X' : 'O'
        
        
        checkLine(0, 1, 2)
        checkLine(3, 4, 5)
        checkLine(6, 7, 8)
        checkLine(0, 3, 6)
        checkLine(1, 4, 7)
        checkLine(2, 5, 8)
        checkLine(0, 4, 8)
        checkLine(6, 4, 2)
    }
}

function checkLine(c1, c2, c3){
    if(    
        casillas[c1].innerHTML.length &&
        casillas[c1].innerHTML == casillas[c2].innerHTML &&
        casillas[c2].innerHTML == casillas [c3].innerHTML
    ){
        showWinner(casillas[c1].innerHTML)
    }
}

function showWinner(player){
    resultado.innerHTML = player + " es el ganador"
    btnReset.hidden = false
    casillas.forEach(casilla => {
        casilla.style.display = 'disabled'
    });
}

function reiniciar(){
    for (let i = 0; i < casillas.length; i++){
        casillas[i].innerHTML = ""
    }
    resultado.innerHTML = ""
    isPlayerOne = true
    playerTurnValue.innerHTML = 'X'
}

const exitGame = () => {
    window.location.reload()
}