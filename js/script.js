'use strict'

const number = document.querySelector('.number');
const increaseButton = document.querySelector('.increase');
const decreaceButton = document.querySelector('.decrease');
const resetButton = document.querySelector('.reset');

let count = Number(localStorage.getItem('count')) || 0;

updateColor (count)

function updateColor (count){
    number.textContent = count;
    if (count>0){
        number.style.color='green'
    }else if (count<0){
        number.style.color='red'
    }else if (count===0){
        number.style.color='black'
    }
    localStorage.setItem('count', count);
}

increaseButton.addEventListener('click', (e)=> {
    count+=1;
    updateColor (count)
});


decreaceButton.addEventListener('click', (e)=> {
    count-=1;
    updateColor (count)
});

resetButton.addEventListener('click', (e)=> {
    count = 0;
    updateColor (count)
});

