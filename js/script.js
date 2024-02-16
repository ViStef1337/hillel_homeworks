'use strict'

const list = document.querySelector('.js-pallet')

const liArray = [...list.children]
liArray.forEach(item=>{
    const color = getRangomColor()
    item.style.backgroundColor = color
    item.dataset.color = color
    // item.firstElementChild.textContent= color
})





list.addEventListener('click',(e)=>{
    if (e.target.nodeName==='UL'){
        return
    }

    console.log(e.target.parentNode)
    const isActive = list.querySelector('.active')

    if (isActive){
        isActive.classList.remove('active')
        isActive.firstElementChild.textContent='...'
    }

    if (e.target===isActive || e.target.parentNode===isActive){
        return;
    }

    if (e.target.nodeName==='SPAN'){
        e.target.parentNode.classList.add('active')
        e.target.textContent = e.target.parentNode.dataset.color
        return;
    }

    e.target.classList.add('active')

    e.target.firstElementChild.textContent=e.target.dataset.color
})

// list.addEventListener('click',(e)=>{
//     if (e.target.nodeName==='UL'){
//         return
//     }
//     const item = e.target.closest('.pallet__item')
//     console.log(item)
//     const isActive = list.querySelector('.active')
//
//     if (isActive){
//         isActive.classList.remove('active')
//         isActive.firstElementChild.textContent='...'
//     }
//     if (item===isActive){
//         return;
//     }
//     item.classList.add('active')
//     item.firstElementChild.textContent=item.dataset.color
// })


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