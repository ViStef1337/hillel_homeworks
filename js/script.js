'use strict'
const form = document.querySelector('form')


const localStorageKey = 'form_input'

form.addEventListener('input',(e)=>{
    const data = JSON.parse(localStorage.getItem(localStorageKey))||{}
    data[e.target.name]=e.target.value
    localStorage.setItem(localStorageKey,JSON.stringify(data))
})


function loadPage(){
    const localData = localStorage.getItem(localStorageKey)
    const parsedData = JSON.parse(localData)
    if(!parsedData){
        return
    }
    // form.elements.email.value=parsedData.email
    // form.elements.message.value=parsedData.message
    Object.entries(parsedData).forEach(([key,value])=>form.elements[key].value=value)
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const {email,message}= e.currentTarget.elements
    if (!email.value||!message.value){
     return alert('enter all inputs')
    }
    console.log({email:email.value,message:message.value})
    form.reset()
    localStorage.removeItem(localStorageKey)
})


loadPage()
























































// const form = document.querySelector('form')
// const data = {}
//
// const LOCAL_STORAGE_KEY = 'form_value'
//
// form.addEventListener('input',(e)=>{
//     data[e.target.name]=e.target.value
//     localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(data))
//     console.log(e.target.message.value)
// })
//
// function loadPage (){
//     const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
//     const parsedData = JSON.parse(storedData)
//     form.elements.message.value=parsedData.message
//     form.elements.email.value=parsedData.email
//     console.log()
//
// }
//
// loadPage()