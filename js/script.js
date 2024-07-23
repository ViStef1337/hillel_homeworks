
'use strict'
const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const checkBox = document.querySelector('.check')
const checkBoxValue = JSON.parse(localStorage.getItem('checkLocal'))
document.body.style.background=checkBoxValue?'purple':'white'
checkBox.checked=checkBoxValue
checkBox.addEventListener('input',()=>{
    document.body.style.background=checkBox.checked?'purple':'white'
    localStorage.setItem('checkLocal',checkBox.checked)
})

const ul = document.querySelector('.section-center')

const btnContainer = document.querySelector('.btn-container')

const createMarcup = (list)=>{
    const marcap = list.map(item=>{
        return `<li class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </li>`
    }).join('')
    ul.innerHTML=marcap
}

createMarcup(menu)

let selectedCategory = getLocalStorage() || []

const btnMarcap = menu.reduce((accumulator, currentValue) => {
    if (accumulator.includes(currentValue.category)){
        return accumulator
    }
    return [...accumulator,currentValue.category];
}, ['all']).map(category=>{
    let isActive = ''
    if (selectedCategory.length===0&&category==='all'){
        isActive='active'
    }
    if (selectedCategory.includes(category)){
        isActive='active'
    }
    return `<button type="button" class="filter-btn ${isActive}" >${category}</button>`
}).join('')


btnContainer.innerHTML=btnMarcap

console.log(selectedCategory)

const btn= document.querySelector('.btn-container')

btn.addEventListener('click',(e)=>{
    if (e.target.nodeName==='DIV'){
        return
    }
    if (e.target.textContent==='all'){
        const activeAll = btn.querySelectorAll('.active')
        activeAll.forEach(item=>item.classList.remove('active'))
        selectedCategory = []
    }
    if (e.target.textContent!=='all'&&btnContainer.firstElementChild.classList.contains('active')){
        btnContainer.firstElementChild.classList.remove('active')
    }
    if (e.target.classList.contains('active')){
        e.target.classList.remove('active')
        selectedCategory = selectedCategory.filter((element)=>element!==e.target.textContent)
        updateMarcup()
        return;
    }
    selectedCategory.push(e.target.textContent)
    updateMarcup()
    e.target.classList.add('active')
})

function updateMarcup(){
    const selectedMenu = menu.filter((element)=>selectedCategory.includes(element.category))
    createMarcup(selectedMenu.length?selectedMenu:menu)
    saveLocalStorage()
}

function saveLocalStorage(){
    localStorage.setItem('data',JSON.stringify(selectedCategory))
}
function getLocalStorage(){
    return JSON.parse(localStorage.getItem('data'))
}


// const arr1 = ['']
//
// const arr2 = ['breakfast','shakes','lunch']
//
// const arr3 = arr2.filter((element)=>arr1.includes(element))
//
// console.log(arr3)





// if (e.target.textContent==='shakes'){
//     ul.innerHTML=''
//     for (let i = 0;i<=menu.length;i++){
//         if (menu[i].category==="shakes"){
//             ul.insertAdjacentHTML('beforeend',`<li class="menu-item">
//       <img src=${menu[i].img} alt=${menu[i].title} class="photo" />
//       <div class="item-info">
//         <header>
//           <h4>${menu[i].title}</h4>
//           <h4 class="price">$${menu[i].price}</h4>
//         </header>
//         <p class="item-text">
//           ${menu[i].desc}
//         </p>
//       </div>
//     </li>`)
//         }
//     }
// }
