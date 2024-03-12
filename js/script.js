'use strict'
//що таке patern
//використання pritier
const createButton = document.querySelector('.create')
const clearButton = document.querySelector('.clear')
const removeOneButton = document.querySelector('.removeOne')
const input = document.querySelector('input')
const ul = document.querySelector('ul')
const p = document.querySelector('p')

function getRandomColor() {
    // Генеруємо випадкові значення для червоного, зеленого та синього кольорів
    const red = Math.floor(Math.random() * 256); // Від 0 до 255
    const green = Math.floor(Math.random() * 256); // Від 0 до 255
    const blue = Math.floor(Math.random() * 256); // Від 0 до 255

    // Повертаємо рядок, що представляє випадковий колір у форматі RGB
    return `rgb(${red}, ${green}, ${blue})`;
}

removeOneButton.addEventListener('click',(e)=>{
    ul.lastElementChild.remove()
    if (ul.children.length===0){
        removeOneButton.disabled=true
        clearButton.disabled=true
        p.style.display='block'
    }
})

clearButton.addEventListener('click', (e) => {
    ul.innerHTML = ''
    clearButton.disabled=true
    removeOneButton.disabled=true
    p.style.display='block'
})

createButton.addEventListener('click', (e) => {
    if (input.value === '' || input.value <= 0) {
        alert('введіть число більше нуля')
        return
    }

    for (let i = 1; i <= input.value; i++) {
        ul.insertAdjacentHTML('beforeend',`<div style="width: ${20+i*10}px; height: ${20+i*10}px; background: ${getRandomColor()}"></div>`)
    }
    removeOneButton.disabled=false
    clearButton.disabled=false
    p.style.display='none'
})
