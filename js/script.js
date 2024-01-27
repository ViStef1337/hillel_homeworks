'use strict'
const menu = document.querySelector('.acardion-list')
menu.addEventListener('click',(e)=>{
    if (e.target.nodeName!=='BUTTON')return;
    const panel = e.target.nextElementSibling
    panel.classList.toggle('active')
})