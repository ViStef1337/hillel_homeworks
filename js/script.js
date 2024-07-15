'use strict'

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

let currentOperand  = ''
let previousOperand = ''
let currentOperation = null


function chooseOperation(operation){
    currentOperation=operation
    previousOperand=currentOperand
    currentOperand=''
}

function appendNumber(number){
    currentOperand=currentOperand+number
}

function updateDisplay(){
    currentOperandTextElement.textContent=currentOperand
    if (currentOperation){
        previousOperandTextElement.textContent=previousOperand+currentOperation
    }else {
        previousOperandTextElement.textContent=''
    }
}

numberButtons.forEach(item=>item.addEventListener('click',(e)=>{
    appendNumber(e.target.textContent)
    updateDisplay()
}))

operationButtons.forEach(item=>item.addEventListener('click',(e)=>{
    if (!currentOperand){
        return
    }
    chooseOperation(e.target.textContent)
    updateDisplay()
}))

equalButton.addEventListener('click',(e)=>{

})

deleteButton.addEventListener('click',(e)=>{

})

allClearButton.addEventListener('click',(e)=>{

})