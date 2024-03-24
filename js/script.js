'use strict'

// let link = document.querySelectorAll('.link')

const pagination = document.querySelector('.pagination')
const ul = document.querySelector('ul')
const prevBtn = document.querySelector('.btn1')
const nextBtn = document.querySelector('.btn2')
const pages = document.querySelectorAll('.link')
const page = document.querySelector('.link')


let currentValue = 1
prevBtn.style.display = 'none'

ul.addEventListener('click',(e)=>{

    if (e.target.nodeName === 'UL'){
        return
    }

    const activePage = pagination.querySelector('.active')
    if (activePage){
        activePage.classList.remove('active')
    }

    e.target.classList.add('active');
    currentValue = e.target.value
    if (currentValue>1){
        prevBtn.style.display = 'block'
    }
    if (currentValue===1){
        prevBtn.style.display = 'none'
    }
    if (currentValue===5){
        nextBtn.style.display = 'none'
    }
    if (currentValue<5){
        nextBtn.style.display = 'block'
    }
    console.log(currentValue)
})

prevBtn.addEventListener('click',(e)=>{
    const activePage = pagination.querySelector('.active')
    if (activePage){
        activePage.classList.remove('active')
    }
    currentValue--
    const nextLi = document.querySelector(`li[value="${currentValue}"]`);
    nextLi.classList.add('active')
    nextBtn.style.display = 'block'
    if (nextLi.value===1){
        prevBtn.style.display = 'none'
    }
})


nextBtn.addEventListener('click',(e)=>{
    const activePage = pagination.querySelector('.active')
    if (activePage){
        activePage.classList.remove('active')
    }
    currentValue++
    const nextLi = document.querySelector(`li[value="${currentValue}"]`);
    nextLi.classList.add('active')
    prevBtn.style.display = 'block'
    if (nextLi.value===5){
        nextBtn.style.display = 'none'
    }
})



// function activeLink(event) {
//     // Отримуємо всі елементи, які мають клас 'link'
//     const link = document.querySelectorAll('.link');
//
//     // Видаляємо клас 'active' у всіх елементів з класом 'link'
//     link.forEach(l => {
//         l.classList.remove('active');
//     });
//
//     // Додаємо клас 'active' елементу, на який клікнули
//     event.target.classList.add('active');
//
//     // Присвоюємо значення 'currentValue' властивості 'value' елементу, на який клікнули
//     currentValue = event.target.value;
// }
