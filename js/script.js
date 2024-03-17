'use strict'
//що таке box-sizing-border-box і content-box
//чим відрізняються 100vh і 100%
//rem em
//переробити код щоб картинки були лішками
//що таке patern
//використання pritier

//створи розмітку за допомогою метожа map використовуючи масив images


const ul = document.querySelector('ul')

const cardLiAll = document.querySelectorAll('.card')
const cardLi = document.querySelector('.card')

const images = ["https://png.pngtree.com/thumb_back/fw800/background/20230529/pngtree-large-wolf-wallpapers-3d-download-wallpaper-3d-image_2672886.jpg"]



cardLiAll.forEach(li=> li.style.background = 'url(https://png.pngtree.com/thumb_back/fw800/background/20230529/pngtree-large-wolf-wallpapers-3d-download-wallpaper-3d-image_2672886.jpg)')



ul.addEventListener('click',(e)=>{
    if (e.target.nodeName==='UL'){
        return
    }

    const activeElement = ul.querySelector('.active')
    const activeElementText = ul.querySelector('.descriptionActive')
    const item = e.target.closest('.card')

    const desc = item.querySelector('.description')

    if (activeElement){
        activeElement.classList.remove('active')
        activeElementText.classList.remove('descriptionActive')
    }

    if (item===activeElement){
        return;
    }

    item.classList.add('active')

    desc.classList.add('descriptionActive')

})



// cardLiAll.forEach(li=>{
//
//     li.addEventListener('click',(e)=>{
//         li.classList.toggle('active')
//         desc.forEach(item=> item.classList.toggle('description-active'))
//     })
// })

