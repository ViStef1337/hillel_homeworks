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


// const arr = [1,2,1,2,2,3,3,4,4,5,5]

// const qwe = arr.filter((item,index,arr)=>arr.indexOf(item)===index)

// const qwe = []
// for (let i = 0;i<arr.length;i++){
//     if (!qwe.includes(arr[i])){
//         qwe.push(arr[i])
//     }
// }

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


// function ownReduce(arr,callBack,initialValue=arr[0]){
//     for (let i=0;i<arr.length;i++){
//         initialValue=callBack(arr[i],i,arr)
//     }
//     return initialValue
// }
//
//
// const newArr = arr.reduce((accumulator, currentValue) =>!accumulator.includes(currentValue)?[...accumulator,currentValue]:accumulator, []);


// const newArr = arr.reduce((acc,currentValue)=>{
//     console.log(acc)
//     if(!acc.includes(currentValue)){
//         return acc.push(currentValue)
//     }
// },[])
/*
Потрібно перевірити "same" масиви
числа з першого у квадраті дорівнюють числам другого
*/

const a = [2, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

b.sort((a,b)=>a-b)

const newA = a.map(item=>Math.pow(item,2))

newA.sort((a,b)=>a-b)
// console.log(b)
// console.log(newA)

// const result= newA.every((item,index,arr)=>{
//     return item===b[index]
// })
// console.log(result)

const result= newA.some((item,index)=>{
    return item===b[index]
})
// console.log(!result)

const people = [
    {
        name: 'Alex',
        know: ['Alex', 'Jhon'],
    },
    {
        name: 'Eva',
        know: ['Alex', 'Jhon'],
    },
    {
        name: 'Ivan',
        know: ['Jhon', 'Eva'],
    },
    {
        name: 'Jhon',
        know: [],
    },
];
//нарцис  'Jhon'
const people2 = [
    {
        name: 'Alex',
        know: ['Alex', 'Jhon'],
    },
    {
        name: 'Jhon',
        know: [],
    },
    {
        name: 'Eva',
        know: [],
    },
    {
        name: 'Ivan',
        know: ['Jhon', 'Eva'],
    },
];
//немає нарциса'
const people3 = [
    {
        name: 'Alex',
        know: ['Alex', 'Eva'],
    },
    {
        name: 'Jhon',
        know: [],
    },
    {
        name: 'Eva',
        know: ['Alex', 'Jhon'],
    },
    {
        name: 'Ivan',
        know: ['Jhon', 'Eva'],
    },
];
//немає нарциса
const people4 = [
    {
        name: 'Alex',
        know: ['Alex', 'Jhon'],
    },
    {
        name: 'Jhon',
        know: ['Eva'],
    },
    {
        name: 'Eva',
        know: ['Alex', 'Jhon'],
    },
    {
        name: 'Ivan',
        know: ['Jhon', 'Eva'],
    },
];
//немає нарциса'

//Нарциса знають всі, нарцис незнає нікого

function findNarcis (arr){
    const obj = arr.find(item=>item.know.length===0)
    console.log(obj)
    return arr.every(item=>{
        if (item.name===obj.name){
            return true
        }
        return item.know.includes(obj.name)
    })

}
findNarcis (people)

console.log(findNarcis(people))
