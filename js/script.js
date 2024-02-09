'use strict'
const button = document.querySelector('.open-model')
const backDrop = document.querySelector('.back-drop')
const close = document.querySelector('.close')

const  toggleModel = () => {
    backDrop.classList.toggle('is-hidden')
}


button.addEventListener('click',toggleModel)
close.addEventListener('click',toggleModel)


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
const gallery = document.querySelector('.gallery')
const galleryList = pictures.map(item=>`<li><img src="${item.url}" class="picture" data-url="${item.url}" alt="item.alt"></li>`)
gallery.insertAdjacentHTML('beforeend',galleryList)

const images = document.querySelectorAll('.picture')
images.forEach(image=>{
    image.addEventListener('click',(e)=>{
        const modalImg = backDrop.querySelector('img')
        modalImg.src=e.target.dataset.url
        toggleModel()
    })
})
