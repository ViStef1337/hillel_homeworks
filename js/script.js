'use strict'
const input = document.querySelector('.text__input')

const generateBtn = document.querySelector('.generate')

const output = document.querySelector('.output')

generateBtn.addEventListener('click',()=>{
    if (!input.value){
        alert('введіть число більше 0')
        return
    }
    // if (input.value>69){
    //     alert('введіть меньше число')
    //     return;
    // }
    output.innerHTML=''
    output.textContent=getRandomText ()
})


function getRandomText (){
        const words = [
        'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'sed', 'do', 'eiusmod',
        'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'Ut', 'enim', 'ad', 'minim',
        'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea',
        'commodo', 'consequat', 'Duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit', 'in', 'voluptate',
        'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla', 'pariatur', 'Excepteur', 'sint',
        'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt',
        'mollit', 'anim', 'id', 'est', 'laborum'
    ];
        let extendedWordsArr = []
    if (input.value>words.length){
        for (let i = 0;i<=input.value;i++){
            extendedWordsArr.push(words[i%words.length])
        }
    }else {
        extendedWordsArr = words.slice(0,input.value)
    }

    return extendedWordsArr.join(' ')
}

getRandomText ()

















































// document.querySelector('.generate').addEventListener('click', generateText);
//
// function generateText() {
//     const numParagraphs = document.querySelector('.text__input').value;
//     const output = document.querySelector('.output');
//     output.innerHTML = '';
//
//     if (numParagraphs < 1) {
//         alert('Введіть число більше або рівне 1');
//         return;
//     }
//
//     for (let i = 0; i < numParagraphs; i++) {
//         const p = document.createElement('p');
//         p.textContent = generateRandomText();
//         output.appendChild(p);
//     }
// }
//
// function generateRandomText() {
//     const words = [
//         'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'sed', 'do', 'eiusmod',
//         'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'Ut', 'enim', 'ad', 'minim',
//         'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea',
//         'commodo', 'consequat', 'Duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit', 'in', 'voluptate',
//         'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla', 'pariatur', 'Excepteur', 'sint',
//         'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt',
//         'mollit', 'anim', 'id', 'est', 'laborum'
//     ];
//
//     let text = '';
//     const wordCount = Math.floor(Math.random() * 50) + 20;
//
//     for (let i = 0; i < wordCount; i++) {
//         const randomIndex = Math.floor(Math.random() * words.length);
//         text += words[randomIndex] + ' ';
//     }
//
//     return text.trim() + '.';
// }
