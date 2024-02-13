'use strict'

const list = document.querySelector('.js-pallet')

const liArray = [...list.children]
liArray.forEach(item=>{
    item.style.backgroundColor = getRangomColor()
})

list.addEventListener('click',(e)=>{

})

// console.log(list.childNodes)

function getRandomHex() {
    return Math.round(Math.random() * 256)
        .toString(16)
        .padStart(2, '0');

}
function getRangomColor() {
    return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}