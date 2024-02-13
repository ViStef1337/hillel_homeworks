'use strict'

const list = document.querySelector('.js-pallet')

list.childNodes

console.log(list.childNodes)

function getRandomHex() {
    return Math.round(Math.random() * 256)
        .toString(16)
        .padStart(2, '0');
}