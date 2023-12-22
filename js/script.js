'use strict'

function evenNumbers(array, number) {
    let www = array.reverse()
    return www.filter(item=> item%2===0).slice(0, number).reverse()
}



function largest(n, array) {
    return array.sort((a, b) => b - a).slice(0, n).sort((a, b) =>a-b)
}


function smallEnough(a, limit){
    return a.every(item=>item<=limit)
}

function min(arr, toReturn) {
    let min = Math.min.apply(null, arr)
    if (toReturn==='value'){
        return min
    }else if (toReturn==='index'){
        return arr.indexOf(min)
    }
}
// const min = (arr, toReturn) => toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));


function fizzbuzz(n) {
    let arr = []
    for (let i = 1;i<=n;i++){
        if (i % 3 === 0 && i% 5 === 0){
            arr.push("FizzBuzz")
        }else if (i % 3 === 0){
            arr.push("Fizz")
        }else if (i % 5 === 0){
            arr.push("Buzz")
        }else {
            arr.push(i)
        }
    }
    return arr
}


function dayPlan (hours, tasks, duration){
    const minutes = hours*60
    if (tasks*duration>minutes){
        return 'You\'re not sleeping tonight!'
    }
    const rest = Math.round((minutes-(tasks*duration))/(tasks-1))
    const arr = []
    for (let i =0;i<tasks;i++){
        arr.push(duration,rest)
    }
    arr.pop()
    return arr
}




function sortGrades(lst){
    const marks = {
        'VB':0,
        'V0':1,
        'V0+':2,
        'V1':3,
        'V2':4,
        'V3':5,
        'V4':6,
        'V5':7,
        'V6':8,
        'V7':9,
        'V8':10,
        'V9':11,
        'V10':12,
        'V11':13,
        'V12':14,
        'V13':15,
        'V14':16,
        'V15':17,
        'V16':18,
        'V17':19,
    }
    return [...lst].sort((a,b)=>marks[a]-marks[b])
}



function exampleSort(arr,exampleArr){
    return [...arr].sort((a,b)=>exampleArr.indexOf(a)-exampleArr.indexOf(b))
}