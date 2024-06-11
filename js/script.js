'use strict'
const ulCityList = document.querySelector('.city__list')
const ulText = document.querySelector('.city__list__text')
const bigImg = document.querySelector('.big__img')

const local = JSON.parse(localStorage.getItem('city')) || 0
function upDate(index) {
    ulText.children[index].classList.add('city__text__active')
    const smallImg = ulText.children[index].querySelector('img')
    bigImg.src=smallImg.src
}

upDate(local)

ulCityList.children[local].classList.add('active')


ulCityList.addEventListener('click',(e)=>{
    if (e.target.nodeName==='UL'){
        return
    }
    const activeLi = document.querySelector('.active')
    if (activeLi){
        activeLi.classList.remove('active')
    }
    e.target.classList.add('active')
    const activeIndex= [...e.currentTarget.children].findIndex(item=>item.classList.contains('active'))
    const activeLiText = document.querySelector('.city__text__active')
    if (activeLiText){
        activeLiText.classList.remove('city__text__active')
    }
    upDate(activeIndex)
    localStorage.setItem('city',JSON.stringify(activeIndex))
})