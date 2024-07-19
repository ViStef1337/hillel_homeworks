'use strict'

'use strict'

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

let currenOperand  = ''
let previousOperand = ''
let currentOperation = null

let initialData = {
    currenOperand: '',
    previousOperand: '',
    currentOperation: null
}

const calculatorData = JSON.parse(localStorage.getItem('calculator')) || initialData
updateDisplay ()
function saveLocalStorage(){
    localStorage.setItem('calculator',JSON.stringify(calculatorData))
}

function appendNumber (number){
    if (number.includes('.') && calculatorData.currenOperand.includes('.')) return;
    calculatorData.currenOperand=calculatorData.currenOperand+number
}

function updateDisplay (){
    currentOperandTextElement.textContent=calculatorData.currenOperand
    if (calculatorData.currentOperation){
        previousOperandTextElement.textContent=calculatorData.previousOperand+calculatorData.currentOperation
    }else {
        previousOperandTextElement.textContent=''
    }
    saveLocalStorage()
}

function chooseOperation (operation){
    calculatorData.currentOperation=operation
    calculatorData.previousOperand=calculatorData.currenOperand
    calculatorData.currenOperand=''
}

function deleteNumber () {
    calculatorData.currenOperand=calculatorData.currenOperand.toString().slice(0,-1)
}

function compute () {
    let computation = null
    const prev = Number(calculatorData.previousOperand)
    const current = Number(calculatorData.currenOperand)
    switch (calculatorData.currentOperation){
        case '+':
            computation=prev+current
            break
        case '÷':
            computation=prev/current
            break
        case '-':
            computation=prev-current
            break
        case '*':
            computation=prev*current
            break
        default: return
    }
    calculatorData.currenOperand=computation
    calculatorData.currentOperation=null
    calculatorData.previousOperand=''
}

numberButtons.forEach(item=>item.addEventListener('click',(e)=>{
    appendNumber (e.target.textContent)
    updateDisplay ()
}))

operationButtons.forEach(item=>item.addEventListener('click',(e)=>{
    if (!calculatorData.currenOperand){
        return
    }
    if (calculatorData.currenOperand.endsWith('.')){
        deleteNumber ()
    }
    if (calculatorData.previousOperand){
        compute()
    }
    chooseOperation (e.target.textContent)
    updateDisplay ()
}))

equalButton.addEventListener('click',(e)=>{
    compute ()
    updateDisplay ()
})

allClearButton.addEventListener('click',(e)=>{
    calculatorData.currenOperand  = ''
    calculatorData.previousOperand = ''
    calculatorData.currentOperation = null
    updateDisplay ()
})

deleteButton.addEventListener('click',(e)=>{
    deleteNumber ()
    updateDisplay ()
})