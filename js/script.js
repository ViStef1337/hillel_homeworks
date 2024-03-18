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


const ul = document.querySelector('ul')
const modal = document.querySelector('.modal')
const img = modal.querySelector('img')
const nextButton = modal.querySelector('.next')
const prevButton = modal.querySelector('.prev')
const marcap = galleryItems.map(({preview,original,description},index)=>{
    return `<li><img src="${preview}" alt="${description}" data-src="${original}" data-index="${index}"></li>`
}).join('')

ul.insertAdjacentHTML('beforeend', marcap)

ul.addEventListener('click',(e)=>{
    if (e.target.nodeName!=='IMG'){
        return
    }
    imgCount = Number(e.target.dataset.index)
    img.src=e.target.dataset.src
    openModal()
})

modal.addEventListener('click',(e)=>{
    if (e.target===modal){
        closeModal()
    }
})

prevButton.addEventListener('click',showPrev)

nextButton.addEventListener('click',showNext)


function openModal(){
    modal.classList.remove('is-hidden')
    window.addEventListener('keydown',pressKey)
}

function closeModal(){
    modal.classList.add('is-hidden')
    window.removeEventListener('keydown',pressKey)
}

function showNext () {
    imgCount+=1
    if (galleryItems.length-1<imgCount){
        imgCount=0
    }
    img.src = galleryItems[imgCount].original
}

function showPrev () {
    imgCount-=1
    if (imgCount<0){
        imgCount = galleryItems.length-1
    }
    img.src = galleryItems[imgCount].original
}

let imgCount = 0
function pressKey (e){
    if (e.code==="Escape"){
        closeModal()
    }
    if (e.code==='ArrowRight'){
        showNext()
    }
    if (e.code==='ArrowLeft'){
        showPrev()
    }
}
