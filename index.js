import {
    cities
} from "./js/script.js";

const form = document.querySelector('form')

const ul = document.querySelector('ul')

const marcap = createMarcap (cities)

ul.insertAdjacentHTML('beforeend',marcap)



form.addEventListener('input',(e)=>{
    const {value} = e.target
    const filteredCities = cities.filter(item=>item.city.toLowerCase().includes(value.toLowerCase())||item.state.toLowerCase().includes(value.toLowerCase()))
    if (filteredCities.length===0){
        const errorMessage = `<li style="color: red">nothing found with your query</li>`
        ul.innerHTML=errorMessage
        return
    }
    const marcap = createMarcap (filteredCities,value)
    ul.innerHTML=marcap
})

function createMarcap (arr,value){
    return arr.map(item=>{
        const cityName = value ? item.city.toLowerCase().replace(value.toLowerCase(),`<span class="hl">${value}</span>`) : item.city
        const stateName = value ? item.state.toLowerCase().replace(value.toLowerCase(),`<span class="hl">${value}</span>`) : item.state
        return `<li><span class="name">${cityName},${stateName}</span><span class="population">${item.population}</span></li>`
    }).join('')
}

const wqe = 'New York'

console.log(wqe.toLowerCase().replace('new','N'))

const btn = document.querySelector('.interval')

btn.addEventListener('click',()=>{
    // clearTimeout(timeOut)
    console.log(timeout)
})

const interval = setInterval(()=>{
    console.log('interval')
},1000)
console.log(interval)

const timeout = 'timeout'

// const timeOut = setTimeout(()=>{
//     console.log('timeout')
//     // clearInterval(interval)
// },5000)