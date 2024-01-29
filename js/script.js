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
const gallery = document.querySelector('.gallery')
const galleryList = pictures.map(item=>`<li><img src="${item.url}" alt="item.alt"></li>`).join('')
gallery.insertAdjacentHTML('beforeend',galleryList)

//при клыцы на зоображення щоб выдкривалось выкно з цим зоображенням