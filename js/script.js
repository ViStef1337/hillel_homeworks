'use strict'
const form = document.querySelector('.form')

form.addEventListener('input',(e)=>{
    console.log(e.target.dataset.url)
    const {dataset,value} = e.target
    const requiredLength = Number(e.target.dataset.length)
    if (requiredLength<=e.target.value.length){
        console.log(e.target.value)
    }
    // console.log(e.target.value)
})
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const {email,number} = e.target.elements
    // if (email.value===''||number.value===''){
    //     alert('fill all inputs')
    //     return
    // }
    console.log(email.value)})