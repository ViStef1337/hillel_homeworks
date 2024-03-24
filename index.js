import {
    cities
} from "./js/script.js";

const form = document.querySelector('form')

const ul = document.querySelector('ul')



form.addEventListener('input',(e)=>{
    console.log(e.target.value)
})