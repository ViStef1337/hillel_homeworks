'use strict'
const galleryItems = [
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
const ul = document.querySelector('ul')
const modal = document.querySelector('.modal')
const modalImg = document.querySelector('.modalImg')
const btnRight = document.querySelector('.right')
const btnLeft = document.querySelector('.left')
const span = document.querySelector('span')
let currentImg = 0


let marcap = galleryItems.map(({preview,original,description},index)=>{
    return `<li><img src="${preview}" data-url="${original}" data-index="${index}" data-desc="${description}" alt=""></li>`
}).join('')

ul.insertAdjacentHTML('beforeend',marcap)

ul.addEventListener('click',(e)=>{
    if (e.target.nodeName!=='IMG'){
        return
    }
    modalImg.src=e.target.dataset.url
    span.textContent=e.target.dataset.desc
    currentImg=Number(e.target.dataset.index)
    openModal(e)
})


modal.addEventListener('click',(e)=>{
    if (e.target===e.currentTarget){
        closeModal(e)
    }
})

btnRight.addEventListener('click',(e)=>{
    showNext()
})

btnLeft.addEventListener('click',(e)=>{
    showPrev()
})

function openModal(e){
    modal.classList.remove('is-hidden')
    window.addEventListener('keydown',keyPress)
}

function closeModal(){
    modal.classList.add('is-hidden')
    window.removeEventListener('keydown',keyPress)
}

function keyPress(e){
    if (e.code==='Escape'){
        closeModal()
    }
    if (e.code==='ArrowRight'){
        showNext()
    }
    if (e.code==='ArrowLeft'){
        showPrev()
    }
}

function showNext(){
    currentImg++
    modalImg.src=galleryItems[currentImg].original
    span.textContent=galleryItems[currentImg].description
}
function showPrev(){
    currentImg--
    modalImg.src=galleryItems[currentImg].original
    span.textContent=galleryItems[currentImg].description
}




