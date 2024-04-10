'use strict'
const ul = document.querySelector('.js-key__list')


ul.addEventListener('click',(e)=>{
    if (e.target.nodeName==='UL'){
        return
    }
    const li = e.target.closest('.key__item')
    li.classList.add('playing')
    console.log(li.dataset.key)
    const audio = document.querySelector(`audio[data-key="${li.dataset.key}"]`)
    audio.play()
})
ul.addEventListener('transitionend',(e)=>{
    if (e.propertyName==='transform'){
        e.target.classList.remove('playing')
    }
})