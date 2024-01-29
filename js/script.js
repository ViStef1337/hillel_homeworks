'use strict'
const button = document.querySelector('.open-model')
const backDrop = document.querySelector('.back-drop')
const close = document.querySelector('.close')

const  toggleModel = () => {
    backDrop.classList.toggle('is-hidden')
}


button.addEventListener('click',toggleModel)
close.addEventListener('click',toggleModel)
