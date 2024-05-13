'use strict'
const btnPrev = document.querySelector('#arrow-left')

const btnNext = document.querySelector('#arrow-right')

const slider = document.querySelector('.slider')

const widthSlider = slider.scrollWidth

const interval = 200
let currentLeftPosition = parseInt(getComputedStyle(slider).left)
console.log(currentLeftPosition)
btnPrev.addEventListener('click',()=>{
    let currentLeftPosition = parseInt(getComputedStyle(slider).left)
    currentLeftPosition += interval
    if (currentLeftPosition>0){
        slider.style.left='0px'
        return
    }
    slider.style.left=currentLeftPosition+'px'
})

btnNext.addEventListener('click',()=>{
    let currentLeftPosition = parseInt(getComputedStyle(slider).left)
    console.log(Math.abs(currentLeftPosition))
    console.log(Math.abs(interval))
    console.log(slider.clientWidth)
    console.log(slider.scrollWidth)
    if (Math.abs(currentLeftPosition)+interval+slider.clientWidth>=slider.scrollWidth){
        slider.style.left=-(slider.scrollWidth-slider.clientWidth)+'px'
        return
    }else{
        slider.style.left=(currentLeftPosition-interval)+'px'
    }
})