'use strict'

let link = document.getElementsByClassName('link')

let currentValue = 1

function activeLink(event) {
    // Отримуємо всі елементи, які мають клас 'link'
    const link = document.querySelectorAll('.link');

    // Видаляємо клас 'active' у всіх елементів з класом 'link'
    link.forEach(l => {
        l.classList.remove('active');
    });

    // Додаємо клас 'active' елементу, на який клікнули
    event.target.classList.add('active');

    // Присвоюємо значення 'currentValue' властивості 'value' елементу, на який клікнули
    currentValue = event.target.value;
}
