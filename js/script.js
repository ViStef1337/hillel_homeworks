'use strict'
// const pictures = [
//     {
//         width: 700,
//         height: 460,
//         url: 'https://picsum.photos/id/0/700/460',
//         alt: 'laptop',
//     },
//     {
//         width: 700,
//         height: 460,
//         url: 'https://picsum.photos/id/1/700/460',
//         alt: 'developer',
//     },
//     {
//         width: 700,
//         height: 460,
//         url: 'https://picsum.photos/id/10/700/460',
//         alt: 'forest',
//     },
//     {
//         width: 700,
//         height: 460,
//         url: 'https://picsum.photos/id/100/700/460',
//         alt: 'beach',
//     },
//     {
//         width: 700,
//         height: 460,
//         url: 'https://picsum.photos/id/1000/700/460',
//         alt: 'mountain',
//     },
// ];
// const gallery = document.querySelector('.gallery')
// const galleryList = pictures.map(item=>`<li><img src="${item.url}" alt="item.alt"></li>`).join('')
// gallery.insertAdjacentHTML('beforeend',galleryList)
//


const modalBtns = document.querySelectorAll('._modal-open')
const modals = document.querySelectorAll('._modal')

function openModal(elem) {
    elem.classList.add('_active')
}

modalBtns.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        let data = e.target.dataset.modalOpen


        modals.forEach(modal=>{
            if (modal.dataset.modal===data){
                openModal(modal)
            }
        })
    })
})


function closeModal(e){
    e.target.closest('._modal').classList.remove('_active')
    if (e.target.classList.contains('modal-close') || e.target.closest('modal-close') || e.target.classList.contains('modal-bg')){
        e.target.classList.contains('modal-close')
    }
}


modals.forEach(modal=>{
    modal.addEventListener('click',e=>closeModal(e))
})

//при клыцы на зоображення щоб выдкривалось выкно з цим зоображенням