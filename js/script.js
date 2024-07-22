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


const arr = [1,2,1,2,2,3,3,4,4,5,5]

const qwe = arr.filter((item,index,arr)=>arr.indexOf(item)===index)

// const qwe = []
// for (let i = 0;i<arr.length;i++){
//     if (!qwe.includes(arr[i])){
//         qwe.push(arr[i])
//     }
// }
console.log(qwe)
// arr.forEach((item,index,arr)=>{
//     console.log(item);console.log(index);console.log(arr)
// })


// function ownForEach (arr,callBack){
//     for (let i=0;i<=arr.length;i++){
//         callBack(arr[i],i,arr)
//     }
// }
//
// ownForEach(arr,(item,index,arr)=>{
//     console.log(item);console.log(index);console.log(arr)
// })


// const newArr = arr.map((item)=>{
//     return item*2
// })
//
// console.log(newArr)



// function ownMap(arr,callBack){
//     console.log(arr)
//     const newArr = []
//     for (let i=0;i<arr.length;i++){
//         newArr.push(callBack(arr[i],i,arr))
//     }
//     return newArr
// }

// function ownFind(arr,callBack){
//     for (let i=0;i<arr.length;i++){
//         if (callBack(arr[i],i,arr)){
//             return arr[i]
//         }
//     }
//     return undefined
// }
//
// console.log(ownMap(arr,(item,index,arr)=>{
//     return item===3
// }))
// ownMap(arr,(item,index,arr)=>{
//     return console.log(item);console.log(index);console.log(arr)
// })

// console.log(ownMap(arr,(item,index,arr)=>{
//     return item*2
// }))

// function ownFilter(arr,callBack){
//     const newArr = []
//     for (let i=0;i<arr.length;i++){
//         if (callBack(arr[i],i,arr)){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
//
// console.log(ownFilter(arr,(item,index,arr)=>{
//     return item % 2 === 0
// }))

