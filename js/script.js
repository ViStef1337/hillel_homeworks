'use strict'
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const ul = document.querySelector('ul');
let editingLi = null;

const localArr = JSON.parse(localStorage.getItem('toDoList')) || []

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!input.value) {
        alert('Введіть щось');
        return;
    }

    if (editingLi) {
        const oldText = editingLi.firstChild.textContent.trim()
        const changedLocalArr = localArr.map(item=>oldText===item?input.value:item)
        localStorage.setItem('toDoList',JSON.stringify(changedLocalArr))
        // Якщо ми редагуємо існуючий елемент
        editingLi.firstChild.textContent = input.value;
        editingLi = null;
    } else {
        // Якщо ми додаємо новий елемент
        ul.insertAdjacentHTML('beforeend', `<li class="item__list">${input.value} <button class="delete">delete</button><button class="redag">redag</button></li>`);
        localArr.push(input.value)
        localStorage.setItem('toDoList',JSON.stringify(localArr))
    }

    input.value = '';
});
function loadLocalStorage (){
    const marcap = localArr.map(li=>`<li class="item__list">${li} <button class="delete">delete</button><button class="redag">redag</button></li>`).join('')
    ul.insertAdjacentHTML('beforeend',marcap)
}
loadLocalStorage ()
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
        console.log(li.firstChild.textContent.trim())
        localStorage.setItem('toDoList',JSON.stringify(renewedArr))
        }

    if (!ul.children.length) {
        ul.insertAdjacentHTML('beforeend', `<li class="item__list">Все виконано</li>`);
    }
});

// const form = document.querySelector('.form')
// const input = document.querySelector('.input')
// const ul = document.querySelector('ul')
//
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     if (!e.target.elements.text.value){
//         alert('введіть щось')
//         return
//     }
//     ul.insertAdjacentHTML('beforeend',`<li class="item__list">${e.target.elements.text.value} <button class="delete">delete</button><button class="redag">redag</button></li>`)
//     e.target.elements.text.value=''
// })
//
// ul.addEventListener('click',(e)=>{
//     if (e.target.nodeName!=='BUTTON'){
//         return
//     }
//
//     if (e.target.className==='redag'){
//         input.value=e.target.closest('.item__list').firstChild.textContent
//     }
//     editingLi.firstChild.textContent = input.value + ' ';
//     if (e.target.className==='delete'){
//         e.target.closest('.item__list').remove()
//     }
//
//     if (!ul.children.length){
//         ul.insertAdjacentHTML('beforeend',`<li class="item__list">все виконано</li>`)
//     }
//
// })

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

const removedFruits = fruits.filter(item=>item!=='Cherry')

// const cherryIndex = fruits.indexOf('Cherry')
//
// const removedFruits = fruits.splice(cherryIndex, 1);

console.log(removedFruits)


