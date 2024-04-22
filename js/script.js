'use strict'

import {getRandomColor} from './getRandomColor.js'

const btnStart = document.querySelector('.start')

const btnStop = document.querySelector('.stop')

const span = document.querySelector('span')


let interval = null

btnStop.disabled = true;

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

