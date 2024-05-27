'use strict'
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

console.log(new Date())

const days = document.querySelector('.days')
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const futureDate = new Date(2024,4,25,8,0)
const text = document.querySelector('.giveaway')

const nameOfDay = weekdays[futureDate.getDay()]
const date = futureDate.getDate()
const month = months[futureDate.getMonth()]
const year = futureDate.getFullYear()
const time = futureDate.getHours()
const min = futureDate.getMinutes().toString().padStart(2, '0')
text.textContent= `giveaway ends on ${nameOfDay}, ${date} ${month} ${year}, ${time}:${min}am`

function logMessage() {
    const difference = futureDate-new Date();
    //1 секунда = 1000 мілісекунд
    //1 хвилина дорівнює 60 секунд
    //1 година 60 хвилин
    //1 день 24 години

    const oneMinute = 60*1000
    const oneHour = 60*1000*60
    const oneDay = 60*1000*60*24
    const day = Math.floor(difference/oneDay)
    const hour= Math.floor(difference%oneDay/oneHour)
    const minute = Math.floor(difference%oneHour/oneMinute)
    const second = Math.floor(difference%oneMinute/1000)

    days.textContent=day.toString().padStart(2, '0')
    hours.textContent=hour.toString().padStart(2, '0')
    minutes.textContent=minute.toString().padStart(2, '0')
    seconds.textContent=second.toString().padStart(2, '0')

}
setInterval(logMessage, 1000);