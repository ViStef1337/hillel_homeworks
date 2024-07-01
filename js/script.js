'use strict'

const forms = [
  'width: 100px; height: 100px; border-width: 1px; border-color: #000000',
  'width: 100px; height: 100px; border-radius: 50%; border-width: 1px; border-color: #000000',
  'width: 150px; height: 100px; border-width: 1px; border-color: #000000',
  'width: 200px; height: 100px; border-radius: 100px / 50px;',
  'width: 150px; height: 100px; transform: skew(20deg);',
];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const randomither = max => {
  return Math.floor(Math.random() * max);
};

let obj = {
    count: 0,
    top: 21,
    left: 21,
    cssText: 'width: 100px; height: 100px; border-width: 1px; border-color: #000000',
    background: 'blue'
}

const localObj = JSON.parse(localStorage.getItem('obj')) || obj

document.body.insertAdjacentHTML('beforeend',`<div class="figure"><span class="text">${localObj.count}</span></div>`)

const div = document.querySelector('.figure')


div.style.cssText=localObj.cssText || 'width: 100px; height: 100px; border-width: 1px; border-color: #000000'
div.style.top=localObj.top
div.style.left=localObj.left
div.style.background=localObj.background




div.addEventListener('click',(e)=>{
    localObj.count++
    localObj.cssText=forms[randomither(forms.length)]
    localObj.background=getRandomHexColor()
    localObj.top=`${randomither(80)}%`
    localObj.left=`${randomither(80)}%`

    div.style.cssText=localObj.cssText
    div.style.background=localObj.background
    div.style.top=localObj.top
    div.style.left=localObj.left
    div.firstElementChild.textContent=localObj.count
    div.style.display='flex'
    div.style.alignItems='center'
    div.style.justifyContent='center'

    localStorage.setItem('obj',JSON.stringify(localObj))
})
