'use strict'

let link = document.querySelectorAll('.link')

const pagination = document.querySelector('.pagination')

const btnPrev = document.querySelector('.btn1')

const activePage = pagination.querySelector('.active')

let currentValue = 1


pagination.addEventListener('click',(e)=>{
    if (e.target===pagination){
        return
    }

    if (activePage){
        activePage.classList.remove('active')
    }

    e.target.classList.add('active');
    // currentValue = e.target.value

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
