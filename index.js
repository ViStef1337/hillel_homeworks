import {
    cities
} from "./js/script.js";

const form = document.querySelector('form')

const ul = document.querySelector('ul')

const marcap = createMarcap (cities)

ul.insertAdjacentHTML('beforeend',marcap)



form.addEventListener('input',(e)=>{
    const filteredCities = cities.filter(item=>item.city.includes(e.target.value)||item.state.includes(e.target.value))
    if (filteredCities.length===0){
        const errorMessage = `<li style="color: red">nothing found with your query</li>>`
        ul.innerHTML=errorMessage
        return
    }
    const marcap = createMarcap (filteredCities)
    ul.innerHTML=marcap
})

function createMarcap (arr){
    return arr.map(item=>`<li><span class="name">${item.city},${item.state}</span><span class="population">${item.population}</span></li>`).join('')
}



// const users = [
//     {
//         name: 'Andriy'
//     },
//     {
//         name: 'Vitaliy'
//     },
//     {
//         name: 'Oleg'
//     }
// ]
//
// console.log(users.filter(item=>item.name === 'Oleg'))
