'use strict'

const pictures = [
    {
        width: 700,
        height: 460,
        url: 'https://picsum.photos/id/0/700/460',
        alt: 'laptop',
    },
    {
        width: 700,
        height: 460,
        url: 'https://picsum.photos/id/1/700/460',
        alt: 'developer',
    },
    {
        width: 700,
        height: 460,
        url: 'https://picsum.photos/id/10/700/460',
        alt: 'forest',
    },
    {
        width: 700,
        height: 460,
        url: 'https://picsum.photos/id/100/700/460',
        alt: 'beach',
    },
    {
        width: 700,
        height: 460,
        url: 'https://picsum.photos/id/1000/700/460',
        alt: 'mountain',
    },
];


const button = document.querySelector('.open-model')
const backDrop = document.querySelector('.back-drop')
const close = document.querySelector('.close')



function openModel (){
    backDrop.classList.remove('is-hidden')
    window.addEventListener('keydown',keyPress)
}

function closeModel (){
    backDrop.classList.add('is-hidden')
    window.removeEventListener('keydown',keyPress)
}



button.addEventListener('click',openModel)
close.addEventListener('click',closeModel)



const gallery = document.querySelector('.gallery')
const galleryList = pictures.map((item,index)=>`<li><img src="${item.url}" class="picture" data-url="${item.url}" data-index="${index}" alt="item.alt"></li>`)
gallery.insertAdjacentHTML('beforeend',galleryList)

const images = document.querySelectorAll('.picture')

let currentImg = 0

// images.forEach(image=>{
//     image.addEventListener('click',(e)=>{
//         const modalImg = backDrop.querySelector('img')
//         currentImg = Number(e.target.dataset.index)
//         modalImg.src=e.target.dataset.url
//         openModel ()
//     })
// })

gallery.addEventListener('click',(e)=>{
    if (e.target.nodeName!=='IMG'){
        return
    }
    const modalImg = backDrop.querySelector('img')
    currentImg = Number(e.target.dataset.index)
    modalImg.src=e.target.dataset.url
    openModel ()
    console.log(e.target.nodeName)
})

function keyPress (e){
    if (e.code==="Escape"){
        closeModel ()
    }
    if (e.code==='ArrowLeft'){
        currentImg-=1
        const modalImg = backDrop.querySelector('img')
        if (currentImg===-1){
            currentImg=pictures.length-1
        }
        modalImg.src=pictures[currentImg].url

    }
    if (e.code==='ArrowRight'){
        currentImg+=1
        const modalImg = backDrop.querySelector('img')
        if (currentImg>pictures.length-1){
            currentImg=0
        }
        modalImg.src=pictures[currentImg].url

    }
}
backDrop.addEventListener('click',(e)=>{
    if (e.target===e.currentTarget){
        closeModel ()
    }
})

// const parent = document.querySelector('.parent')
// parent.addEventListener('click',(e)=>{
//     console.log('parent')
//     console.log('target',e.target)
// })
//
// const child = document.querySelector('.child')
// child.addEventListener('click',(e)=>{
//     console.log('child')
//     console.log('target',e.target)
// })
//
// const target = document.querySelector('.target')
// target.addEventListener('click',(e)=>{
//     console.log(target)
// })
//
// window.addEventListener('click',(e)=>{
//     console.log(window)
// },{
//     capture:true
// })