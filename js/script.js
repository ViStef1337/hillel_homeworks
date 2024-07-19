// let intervalId = setInterval(() => {
//     const now = new Date()
//     console.log(now.getSeconds())
//     console.log(now.getMinutes())
//     console.log(now.getHours())
//     // console.log(Math.floor(new Date().getTime()/1000)%60);
//     // console.log(Math.floor(new Date().getTime()/1000/60)%60)
//     // console.log(Math.floor(new Date().getTime()/1000/60/60)%24-5)
// }, 1000);
//
// intervalId()

const secondArrow = document.querySelector('.hand-second')
const minuteArrow = document.querySelector('.hand-min')
const hourArrow = document.querySelector('.hand-hour')

let intervalId = setInterval(() => {
    const now = new Date
    secondArrow.style.transform=`rotate(${now.getSeconds()*(360/60)+90}deg)`
    minuteArrow.style.transform=`rotate(${now.getMinutes()*(360/60)+90}deg)`
    hourArrow.style.transform=`rotate(${now.getHours()*(360/12)+90}deg)`
}, 1000)

//як передавати посилання на функцію як працює і приклади