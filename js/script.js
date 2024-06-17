'use strict'
const form = document.querySelector('form')
const ul = document.querySelector('ul')
const input = document.querySelector('input')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const obj = {fullName:e.target.elements.input.value,birthDay:'2022/6/12'}
    friends.push(obj)
    createList ()
})

function createList (){
    const filteredFriends = friends.filter(item=>{
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
        return `<li>${item.fullName} - ${difference} years</li>`
    }).join('')

    ul.innerHTML=marcap
}

const friends =[
    {fullName:'Vitaliy',birthDay:'1999/2/27'},
    {fullName:'Roman',birthDay:'2022/6/12'},
    {fullName:'Andriy',birthDay:'2023/6/12'},
    {fullName:'Oleg',birthDay:'2023/2/15'}
]

const filteredFriends = friends.filter(item=>{
    const today = new Date()
    const todayDate = today.getDate()
    const todayMonth = today.getMonth()+1
    const dateBirthday = new Date(item.birthDay)
    const monthBirthDay = dateBirthday.getMonth()+1
    const dayBirthDay = dateBirthday.getDate()
    return todayDate === dayBirthDay && todayMonth===monthBirthDay
})
console.log(filteredFriends)
const marcap = filteredFriends.map(item=>{
    const todayYear = new Date().getFullYear()
    const birthYear = new Date(item.birthDay).getFullYear()
    const difference = todayYear-birthYear
    return `<li>${item.fullName} - ${difference} years</li>`
}).join('')

ul.innerHTML=marcap



// const myBirthDay = new Date('1999/2/27')
// console.log(myBirthDay)
// console.log(myBirthDay.getDate(),myBirthDay.getMonth()+1)