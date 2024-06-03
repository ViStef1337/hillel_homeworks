'use strict'
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const ul = document.querySelector('ul');
let editingLi = null;

const localArr = JSON.parse(localStorage.getItem('toDoList')) || []
function saveLocalStorage (arr){
    localStorage.setItem('toDoList',JSON.stringify(arr))
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!input.value) {
        alert('Введіть щось');
        return;
    }
    const found = localArr.find(item=>item===input.value)
    if (found){
        alert('додайте щось інше')
        return;
    }
    if (editingLi) {
        const oldText = editingLi.firstChild.textContent.trim()
        const changedLocalArr = localArr.map(item=>oldText===item?input.value:item)
        saveLocalStorage (changedLocalArr)
        // Якщо ми редагуємо існуючий елемент
        editingLi.firstChild.textContent = input.value;
        editingLi = null;
    } else {
        // Якщо ми додаємо новий елемент
        createMarcap([input.value])
        localArr.push(input.value)
        saveLocalStorage (localArr)
    }

    input.value = '';
});
function createMarcap (arr){
    console.log(arr)
    const marcap = arr.map(li=>`<li class="item__list">${li} <button class="delete">delete</button><button class="redag">redag</button></li>`).join('')
    ul.insertAdjacentHTML('beforeend',marcap)
}
createMarcap (localArr)
ul.addEventListener('click', (e) => {
    if (e.target.nodeName !== 'BUTTON') {
        return;
    }

    const li = e.target.closest('.item__list');

    if (e.target.className === 'redag') {
        input.value = li.firstChild.textContent.trim();
        editingLi = li;
    }

    if (e.target.className === 'delete') {
        li.remove();
        const renewedArr = localArr.filter(item=>item!==li.firstChild.textContent.trim())
        saveLocalStorage (renewedArr)
        }

    if (!ul.children.length) {
        ul.insertAdjacentHTML('beforeend', `<li class="item__list">Все виконано</li>`);
    }
});




