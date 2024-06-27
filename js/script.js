'use strict'

const form = document.querySelector('form')
const ul = document.querySelector('ul')
const input = document.querySelector('input')
const birthdayInput = document.querySelector('input[name="birthdate"]')
const nameInput = document.querySelector('input[name="name"]')


const friends =[
    // {fullName:'Vitaliy',birthDay:'1999/2/27'},
    // {fullName:'Roman',birthDay:'2022/6/17'},
    // {fullName:'Andriy',birthDay:'2023/6/17'},
    // {fullName:'Oleg',birthDay:'2023/2/15'}
]

const obj = {}

let editingLi = null

function getFormatedTodayDate (){
    const today = new Date()
    const todayDate = today.getDate()
    const todayMonth = String(today.getMonth()+1).padStart(2,'0')
    const todayYear = today.getFullYear()
    return `${todayYear}-${todayMonth}-${todayDate}`
}

birthdayInput.value=getFormatedTodayDate ()

const localArr = JSON.parse(localStorage.getItem('friends')) || friends


function saveLocal(arr){
    localStorage.setItem('friends',JSON.stringify(arr))
}


ul.addEventListener('click',(e)=>{
    if (e.target.nodeName==='UL'){
        return
    }

    const li = e.target.closest('.item')

    if (e.target.className==='delete'){
        const filteredLocalArr = localArr.filter(item=>item.fullName!==li.firstElementChild.textContent)
        saveLocal(filteredLocalArr)
        li.remove()
    }
    if (e.target.className==='redag'){
        editingLi=li
        form.elements.btn.textContent='redag'
        form.elements.name.value=li.children[0].textContent
        form.elements.birthdate.value=li.dataset.year.slice(0,10)
    }
})

form.addEventListener('submit',(e)=>{

    e.preventDefault()
    localStorage.setItem('inputs',JSON.stringify({}))
    const {birthdate,name} = e.target.elements

    const obj = {fullName:name.value,birthDay:`${birthdate.value}T00:00:00`}
    if (editingLi) {
        const oldText = editingLi.firstChild.textContent.trim()
        const changedLocalArr = localArr.map(item=>oldText===item.fullName?obj:item)
        saveLocal(changedLocalArr)
        createList (changedLocalArr)
        editingLi.firstChild.textContent = name.value;
        form.elements.btn.textContent='submit'
        birthdate.value=getFormatedTodayDate()
        name.value=''
        editingLi = null;
        return
        }
    localArr.push(obj)
    saveLocal(localArr)
    createList (localArr)
    e.target.reset()
    birthdate.value=getFormatedTodayDate()
})


const localInputs = JSON.parse(localStorage.getItem('inputs'))

form.elements.name.value=localInputs.name || ''
form.elements.birthdate.value=localInputs.birthdate || getFormatedTodayDate ()
form.addEventListener('input',(e)=>{

    obj[e.target.name]=e.target.value
    localStorage.setItem('inputs',JSON.stringify(obj))

})


function createList (localArr){
    const filteredFriends = localArr.filter(item=>{
        const today = new Date()
        const todayDate = today.getDate()
        const todayMonth = today.getMonth()+1
        const dateBirthday = new Date(item.birthDay)
        const monthBirthDay = dateBirthday.getMonth()+1
        const dayBirthDay = dateBirthday.getDate()
        return todayDate === dayBirthDay && todayMonth===monthBirthDay
    })
    const marcap = filteredFriends.map(item=>{
        const todayYear = new Date().getFullYear()
        const birthYear = new Date(item.birthDay).getFullYear()
        const difference = todayYear-birthYear
        return `<li data-year="${item.birthDay}" class="item"><span class="name">${item.fullName}</span>  &ensp; &ensp;  <span class="year">${difference}</span> <button class="delete">delete</button> <button class="redag">redag</button></li>`
    }).join('')

    ul.innerHTML=marcap
}
createList (localArr)

// const filteredFriends = localArr.filter(item=>{
//     const today = new Date()
//     const todayDate = today.getDate()
//     const todayMonth = today.getMonth()+1
//     const dateBirthday = new Date(item.birthDay)
//     const monthBirthDay = dateBirthday.getMonth()+1
//     const dayBirthDay = dateBirthday.getDate()
//     return todayDate === dayBirthDay && todayMonth===monthBirthDay
// })
//
// const marcap = filteredFriends.map(item=>{
//     const todayYear = new Date().getFullYear()
//     const birthYear = new Date(item.birthDay).getFullYear()
//     const difference = todayYear-birthYear
//     return `<li class="item"><p>${item.fullName}</p> - ${difference} years <button class="delete">delete</button> <button class="redag">redag</button></li>`
// }).join('')
//
// ul.innerHTML=marcap


// const myBirthDay = new Date('1999/2/27')
// console.log(myBirthDay)
// console.log(myBirthDay.getDate(),myBirthDay.getMonth()+1)