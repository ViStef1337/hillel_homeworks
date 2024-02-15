'use strict'

const list = document.querySelector('.js-pallet')

const liArray = [...list.children]
liArray.forEach(item=>{
    item.style.backgroundColor = getRangomColor()
})

list.addEventListener('click',(e)=>{
    if (e.target.nodeName==='UL'){
        return
    }
    const isActive = list.querySelector('.active')

    if (isActive){
        isActive.classList.remove('active')
    }
    if (e.target===isActive){
        return;
    }
    e.target.classList.add('active')
    console.log(isActive)
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
//додавати в спан колір який є в лішці