'use strict'
const ul = document.querySelector('.js-key__list')
ul.addEventListener('transitionend',(e)=>{
    if (e.propertyName==='transform'){
        e.target.classList.remove('playing')
    }
})
ul.addEventListener('click',(e)=>{
    if (e.target.nodeName === 'UL'){
        return
    }
    const li = e.target.closest('.key__item')
    li.classList.add('playing')
    soundPlay(li.dataset.key)
})

window.addEventListener('keydown',(e)=>{
    const li = document.querySelector(`li[data-key='${e.keyCode}']`)
    if (!li){
        return
    }
    li.classList.add('playing')
    soundPlay(e.keyCode)
})

function soundPlay (key){
    const sound = document.querySelector(`audio[data-key='${key}']`)
    sound.play()
}