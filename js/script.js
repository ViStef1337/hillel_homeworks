'use strict'
const galleryItems = [
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
        description: 'Hokkaido Flower',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
    },
]


const gallery = document.querySelector('.gallery')

const marcap = galleryItems.map(({preview, original,description},index)=>`<li class="gallery__item"><img class="gallery__image" src="${preview}" alt="${description}" data-src="${original}" ></li>`).join('')
const modal = document.querySelector('.modal')
const img = document.querySelector('img')
gallery.insertAdjacentHTML('beforeend',marcap)

gallery.addEventListener('click',(e)=>{
    if (e.target===gallery){
        return
    }
    img.src=e.target.dataset.src
    openModal()
    // if (e.target.nodeName !== 'IMG'){
    //     return;
    // }
})
modal.addEventListener('click',(e)=>{
    if (e.target===modal){
        closeModal()
    }
})

function openModal(){
    modal.classList.remove('is-hidden')
    window.addEventListener('keydown',keyClose)
}
function closeModal(){
    modal.classList.add('is-hidden')
    window.removeEventListener('keydown',keyClose)
}
let imgCount = 0
function keyClose(e) {
    if (e.code === 'Escape') {
        closeModal()
    }
    if (e.code === 'ArrowRight') {
        imgCount += 1
        if (imgCount>galleryItems.length){
            imgCount=0
        }
        img.src = galleryItems[imgCount].original
    }


    if (e.code === 'ArrowLeft') {
        imgCount -= 1
        if (imgCount<0){
            imgCount=galleryItems.length-1
        }
        img.src = galleryItems[imgCount].original
    }
}





























// const gallery = document.querySelector('.gallery')
// const modal = document.querySelector('.modal')
// const img = modal.querySelector('img')
//
// const marcap = galleryItems.map(({preview, original, description},index) =>
//     `<li class="gallery__item"><img class="gallery__image" src="${preview}" data-src="${original}" data-index="${index}" alt="${description}"></li>`
// ).join('')
// gallery.insertAdjacentHTML('beforeend', marcap)
//
//
// function openModal() {
//     modal.classList.remove('is-hidden')
//     window.addEventListener('keydown',keyClose)
// }
//
//
// function closeModal() {
//     modal.classList.add('is-hidden')
// }
//
// let currentImg = 0
// function keyClose(e){
//     if (e.code==='Escape'){
//         closeModal()
//     }
//     if (e.code==="ArrowLeft"){
//         currentImg-=1
//         img.src=galleryItems[currentImg].original
//     }
//     if (e.code==="ArrowRight"){
//         currentImg+=1
//         img.src=galleryItems[currentImg].original
//     }
// }
//
//
// gallery.addEventListener('click', (e) => {
//         if (e.target.nodeName !== 'IMG') {
//             return
//         }
//         currentImg=Number(e.target.dataset.index)
//         img.src = e.target.dataset.src
//         openModal()
//     }
// )
//
// modal.addEventListener('click', (e) => {
//     if (e.target === e.currentTarget) {
//         closeModal()
//     }
// })




//вивчити що таке диструктиризація і що таке диструктиризація обєкта і масива і додати розмітку в дом
//почитати що таке localstorage