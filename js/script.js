'use strict'
// let promise = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('я прийшов з кімнати на кухню');
//     },1000)
// })
//
// promise.then((result)=>{
//     console.log(result)
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(result+',дістав їжу з холодильника')
//         },1500);
//     }).then((result2)=>{
//         console.log(result2)
//         return new Promise((resolve)=>{
//             setTimeout(()=>{
//                 resolve(result2+'і зїв цю їжу');
//             },2000)
//         }).then((data)=> console.log(data))
//     })
// })

// console.log('start')
// setTimeout(()=>{console.log('setTimeout 2000')},2000)
// setTimeout(()=>{console.log('setTimeout 1000')},1000)
// let count = 0
// const start = performance.now()
// for (let i = 0;i<100000;i++){
//     count+=i
// }
// const end = performance.now()
// console.log(count,`час виконяння ${end-start}`)
// console.log('end')
//start
//console.log(count,`час виконяння ${end-start}`)
//console.log('end')

let data = null
const promise = new Promise((resolve,reject)=>{
    resolve(`success`)
    setTimeout(()=>{
        console.log('timeout')
        reject('error')
    },2000)
})
promise.then((value)=>{
    data=value
    console.log('then completed')
}).catch((error)=>console.log(error))

console.log(data)
setTimeout(()=>{
    console.log('timeOut')
    console.log(data)
},1000)


const form = document.querySelector('.form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const {delay,step,amount} = form.elements
    const delayNumber = Number(delay.value)
    const stepNumber = Number(step.value)
    for (let i = 0;i<amount.value;i++){
        createPromise(i+1,delayNumber+i*stepNumber)
    }
})

function createPromise(position,delay){
    const random = Math.random()
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (random<0.3){
                resolve({position,delay})
            }else reject({position,delay})
        },delay)
    })
    promise.then((value)=>{
            console.log(`✅ Fulfilled promise ${value.position} in ${value.delay}ms`)
    }).catch((error)=>{
        console.log(`❌ Failed promise ${error.position} in ${error.delay}ms`)
    })
}

/*
 * Methods:
 * Promise.race(array) - повертає перший успішно виконаний або відхилений проміс, зі значенням чи причиною відхилення цього промісу.
 *
 * Promise.all(array) - повертає проміс, який виконається тоді, коли будуть успішно виконані всі проміси, або відхилено будь-який з них.
 *
 * Promise.allSettled(array) - повертає проміс, який виконується коли всі отримані проміси завершені (успішно виконані або відхилені), міститиме масив результатів отриманих промісів (status і value для успішних, status та reason для неуспішних)
 *
 * Promise.any(array) - як тільки один із промісів виконається успішно, метод поверне значення виконаного промісу. Якщо жоден із промісів не завершиться успішно, тоді повернутий Promise буде відхилено
 */

/*
 * Зробіть 3 проміси - по одному для кожного фреймворку з масиву.
 * У кожному розташована функція setTimeout із випадковою затримкою від 0 до 2 секунд.
 * Зробити так, щоб проміси і резолвилися, і реджектилися випадково.
 * Нехай кожен проміс своїм результатом повертає цю затримку та ім'я фреймворку, а при помилці ще й текст помилки 'Promise error'.
 */

// const frameworks = ['React', 'Vue', 'Angular'];

// const getRandomDelay = () => Math.ceil(Math.random() * 2000);

/*
 * За допомогою Promise.race дочекайтеся завантаження першого промісу, що спрацював, і виведіть результат його роботи на екран: ✅ ${Framework_name} won with ${delay} ms
 * або результат помилки: ❌ ${error}! ${name} rejected in ${delay} ms
 */

// const onSuccess = ({ framework, delay }) => {
//   console.log(✅ ${framework} won with ${delay} ms);
// };

// const OnError = ({ framework, delay, error }) => {
//   console.log(❌ ${error}! ${framework} rejected in ${delay} ms);
// };

/*
 * За допомогою Promise.all отримайте масив результатів
 * Виведіть на екран інформацію, з якою затримкою виконався проміс для кожного фреймфорка: ✅ ${Framework_name} fulfilled in ${delay} ms
 * Або з якою затримкою зареджектився один із них: ❌ ${error}! ${Framework_name} rejected in ${delay} ms
 */

// const onSuccess = ({ framework, delay }) => {
//   console.log(✅ ${framework} won with ${delay} ms);
// };

// const OnError = ({ framework, delay, error }) => {
//   console.log(❌ ${error}! ${framework} rejected in ${delay} ms);
// };


/*
 * За допомогою Promise.allSettled отримайте масив результатів.
 * Виведіть на екран інформацію, з яким результатом виконався проміс для кожного фреймфорка:
 * ✅ ${Framework_name} fulfilled in ${delay} ms
 * ❌ ${error}! ${Framework_name} rejected in ${delay} ms
 *
 * Приклад відповіді:
 * {status: "fulfilled", value: 99},
 * {status: "rejected", reason: Error: an error}
 */

// const onSuccess = ({ framework, delay }) => {
//   console.log(✅ ${framework} won with ${delay} ms);
// };

// const OnError = ({ framework, delay, error }) => {
//   console.log(❌ ${error}! ${framework} rejected in ${delay} ms);
// };