'use strict'
const form = document.querySelector('form')
const data = {}

const LOCAL_STORAGE_KEY = 'form_value'

form.addEventListener('input',(e)=>{
    data[e.target.name]=e.target.value
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(data))
})

function loadPage (){
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsedData = JSON.parse(storedData)
    form.elements.message.value=parsedData.message
    form.elements.email.value=parsedData.email
    console.log(form.elements.message)
    console.log(parsedData)
}

loadPage()