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

const images = ["https://png.pngtree.com/thumb_back/fw800/background/20230529/pngtree-large-wolf-wallpapers-3d-download-wallpaper-3d-image_2672886.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrdQ0ZkBDTgWQ5btmwRbLwokNZm14ZhbSZYQ&usqp=CAU","https://png.pngtree.com/thumb_back/fw800/background/20230529/pngtree-large-wolf-wallpapers-3d-download-wallpaper-3d-image_2672886.jpg","https://png.pngtree.com/thumb_back/fw800/background/20230529/pngtree-large-wolf-wallpapers-3d-download-wallpaper-3d-image_2672886.jpg"]

const marcap = images.map((item,index)=>{
    return ` <li class="card" style="background-image: url('${item}')">
            <div class="row">
                <div class="icon">${index+1}</div>
                <div class="description">
                    <h4>Lorem ipsum.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, illum.</p>
                </div>
            </div>
        </li>`
}).join('')
 console.log(marcap)
// cardLiAll.forEach(li=> li.style.background = 'url(https://png.pngtree.com/thumb_back/fw800/background/20230529/pngtree-large-wolf-wallpapers-3d-download-wallpaper-3d-image_2672886.jpg)')

ul.insertAdjacentHTML('beforeend', marcap)

ul.addEventListener('click',(e)=>{
    if (e.target.nodeName==='UL'){
        return
    }

    const activeElement = ul.querySelector('.active')
    const activeElementText = ul.querySelector('.descriptionActive')
    const li = e.target.closest('.card')

    const desc = li.querySelector('.description')

    if (activeElement){
        activeElement.classList.remove('active')
        activeElementText.classList.remove('descriptionActive')
    }

    if (li===activeElement){
        return;
    }

    li.classList.add('active')

    desc.classList.add('descriptionActive')

})


// cardLiAll.forEach(li=> li.style.background = 'url(https://png.pngtree.com/thumb_back/fw800/background/20230529/pngtree-large-wolf-wallpapers-3d-download-wallpaper-3d-image_2672886.jpg)')
//
// cardLiAll.forEach(li=>{
//
//     li.addEventListener('click',(e)=>{
//         li.classList.add('active')
//     })
//
// })

