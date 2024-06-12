'use strict'
const computerChoises = ['rock','scissors','paper']

const choise = document.querySelector('.choice')
const playerDisplay = document.querySelector('.player')
const computerDisplay = document.querySelector('.computer')
const resultDisplay = document.querySelector('.result')

function playGame(playerChoice){
    const computerChoice = computerChoises[Math.floor(Math.random()*3)]
    let result = ''
    if (playerChoice===computerChoice){
        result='its a tie'
    }
    else {
        switch (playerChoice) {
            case 'rock':
                result = (computerChoice==='scissors') ? 'you win' : 'you lose'
            case 'paper':
                result = (computerChoice==='rock') ? 'you win' : 'you lose'
            case 'scissors':
                result = (computerChoice==='paper') ? 'you win' : 'you lose'
        }
    }
    playerDisplay.textContent=`Player : ${playerChoice}`
    computerDisplay.textContent=`Computer: ${computerChoice}`
    resultDisplay.textContent=`Result: ${result}`
}

choise.addEventListener('click',(e)=>{
    if (e.target===choise){
        return
    }
    playGame(e.target.textContent)
})

