'use strict'
// const data = {name: 'mango',message: 'Hello'}
// localStorage.setItem('form',JSON.stringify(data))
// const persistedValue = localStorage.getItem('form')
// console.log(JSON.parse(persistedValue))


const form = document.querySelector('form')
load()

console.log(form.elements)
form.addEventListener('input',(e)=>{
    const data = JSON.parse(localStorage.getItem('data')) ?? {}
    data[e.target.name]=e.target.value
    localStorage.setItem('data',JSON.stringify(data))
})


function load (){
    const persistedValue = JSON.parse(localStorage.getItem('data'))
    if (persistedValue){
        Object.entries(persistedValue).forEach(([key,value])=>{form.elements[key].value=value})
    }
    console.log(Object.entries(persistedValue))
}
//повторити методи обєктів
//JSON.parse() щоб зробити з джейсона обєкт
//JSON.stringify() перетворюємо обєкт в джейсон щоб зберегти в локалсторейдж