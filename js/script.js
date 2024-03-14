'use strict'
//що таке box-sizing-border-box і content-box
//чим відрізняються 100vh і 100%
//rem em
//переробити код щоб картинки були лішками
//що таке patern
//використання pritier
const ul = document.querySelector('ul')

const cardLiAll = document.querySelectorAll('.card')
const cardLi = document.querySelector('.card')

const images = ["https://d1vcy8ih94g58p.cloudfront.net/eyJrZXkiOiIyNzI2ODRcL2JGelNLZXdxR08wVkp5b3ZoNWJ0MzN3dFQzZ2lzcXlkQjlUREZnR2suanBlZyIsImJ1Y2tldCI6IndpcmVzdG9jay1vcmlnaW5hbC1wcm9kdWN0aW9uIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDI0LCJmaXQiOiJjb3ZlciJ9LCJvdmVybGF5V2l0aCI6eyJidWNrZXQiOiJ3aXJlc3RvY2stb3JpZ2luYWwtcHJvZHVjdGlvbiIsImtleSI6IndhdGVybWFya3NcL3dhdGVybWFyay5wbmcifSwianBlZyI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=6a4a791f7057aff473aa4e79f978c782cb0fc3e3a62f55a2eef06de41f3f6428","https://d1vcy8ih94g58p.cloudfront.net/eyJrZXkiOiIyNzI2ODRcL2JGelNLZXdxR08wVkp5b3ZoNWJ0MzN3dFQzZ2lzcXlkQjlUREZnR2suanBlZyIsImJ1Y2tldCI6IndpcmVzdG9jay1vcmlnaW5hbC1wcm9kdWN0aW9uIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDI0LCJmaXQiOiJjb3ZlciJ9LCJvdmVybGF5V2l0aCI6eyJidWNrZXQiOiJ3aXJlc3RvY2stb3JpZ2luYWwtcHJvZHVjdGlvbiIsImtleSI6IndhdGVybWFya3NcL3dhdGVybWFyay5wbmcifSwianBlZyI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=6a4a791f7057aff473aa4e79f978c782cb0fc3e3a62f55a2eef06de41f3f6428","https://d1vcy8ih94g58p.cloudfront.net/eyJrZXkiOiIyNzI2ODRcL2JGelNLZXdxR08wVkp5b3ZoNWJ0MzN3dFQzZ2lzcXlkQjlUREZnR2suanBlZyIsImJ1Y2tldCI6IndpcmVzdG9jay1vcmlnaW5hbC1wcm9kdWN0aW9uIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDI0LCJmaXQiOiJjb3ZlciJ9LCJvdmVybGF5V2l0aCI6eyJidWNrZXQiOiJ3aXJlc3RvY2stb3JpZ2luYWwtcHJvZHVjdGlvbiIsImtleSI6IndhdGVybWFya3NcL3dhdGVybWFyay5wbmcifSwianBlZyI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=6a4a791f7057aff473aa4e79f978c782cb0fc3e3a62f55a2eef06de41f3f6428","https://d1vcy8ih94g58p.cloudfront.net/eyJrZXkiOiIyNzI2ODRcL2JGelNLZXdxR08wVkp5b3ZoNWJ0MzN3dFQzZ2lzcXlkQjlUREZnR2suanBlZyIsImJ1Y2tldCI6IndpcmVzdG9jay1vcmlnaW5hbC1wcm9kdWN0aW9uIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDI0LCJmaXQiOiJjb3ZlciJ9LCJvdmVybGF5V2l0aCI6eyJidWNrZXQiOiJ3aXJlc3RvY2stb3JpZ2luYWwtcHJvZHVjdGlvbiIsImtleSI6IndhdGVybWFya3NcL3dhdGVybWFyay5wbmcifSwianBlZyI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=6a4a791f7057aff473aa4e79f978c782cb0fc3e3a62f55a2eef06de41f3f6428"]




ul.addEventListener('click',(e)=>{
    if (e.target.nodeName==='UL'){
        return
    }
    const isActive = ul.querySelector('.active')

    if (isActive){
        isActive.classList.remove('active')
    }
    const item = e.target.closest('.card')

    console.log(item)
    if (item===isActive){
        return;
    }


    item.classList.add('active')
    const desc = item.querySelector('.description')

})



// cardLiAll.forEach(li=>{
//
//     li.addEventListener('click',(e)=>{
//         li.classList.toggle('active')
//         desc.forEach(item=> item.classList.toggle('description-active'))
//     })
// })

