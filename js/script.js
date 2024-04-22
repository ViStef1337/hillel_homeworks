'use strict'

import {getRandomColor} from './getRandomColor.js'

const btnStart = document.querySelector('.start')

const btnStop = document.querySelector('.stop')

const span = document.querySelector('.color')

const input = document.querySelector('#myRange')

const p = document.querySelector('.text')

const hello = document.querySelector('.hello')

const word = document.querySelector('.word')


hello.addEventListener('input',(e)=>{
    if (!e.target.value){
        word.textContent='world'
        return
    }
    word.textContent=e.target.value
})

// Отримуємо розмір шрифту
// const fontSize = window.getComputedStyle(input).fontSize;
//
// const size = fontSize.slice(0,-2)
//
// input.value=size
//
// let interval = null
//
// btnStop.disabled = true;
//
// input.addEventListener('input',()=>{
//
// })

p.style.fontSize=input.value+'px'

input.addEventListener('input',()=>{
    p.style.fontSize=input.value+'px'
    console.log(input.value)
})

btnStart.addEventListener('click',()=>{

    btnStart.disabled = true;

    btnStop.disabled= false;

    interval = setInterval(()=>{
        const color = getRandomColor()
        document.body.style.backgroundColor = color
        span.textContent = color
    },1000)

})



btnStop.addEventListener('click',()=>{
    btnStop.disabled= true;

    btnStart.disabled = false;

        clearInterval(interval);

})

