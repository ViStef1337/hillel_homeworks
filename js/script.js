'use strict'

// function evenNumbers(array, number) {
//     let www = array.reverse()
//     return www.filter(item=> item%2===0).slice(0, number).reverse()
// }
//
//
//
// function largest(n, array) {
//     return array.sort((a, b) => b - a).slice(0, n).sort((a, b) =>a-b)
// }
//
//
// function smallEnough(a, limit){
//     return a.every(item=>item<=limit)
// }
//
// function min(arr, toReturn) {
//     let min = Math.min.apply(null, arr)
//     if (toReturn==='value'){
//         return min
//     }else if (toReturn==='index'){
//         return arr.indexOf(min)
//     }
// }
// // const min = (arr, toReturn) => toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
//
//
// function fizzbuzz(n) {
//     let arr = []
//     for (let i = 1;i<=n;i++){
//         if (i % 3 === 0 && i% 5 === 0){
//             arr.push("FizzBuzz")
//         }else if (i % 3 === 0){
//             arr.push("Fizz")
//         }else if (i % 5 === 0){
//             arr.push("Buzz")
//         }else {
//             arr.push(i)
//         }
//     }
//     return arr
// }
//
//
// function dayPlan (hours, tasks, duration){
//     const minutes = hours*60
//     if (tasks*duration>minutes){
//         return 'You\'re not sleeping tonight!'
//     }
//     const rest = Math.round((minutes-(tasks*duration))/(tasks-1))
//     const arr = []
//     for (let i =0;i<tasks;i++){
//         arr.push(duration,rest)
//     }
//     arr.pop()
//     return arr
// }
//
//
//
//
// function sortGrades(lst){
//     const marks = {
//         'VB':0,
//         'V0':1,
//         'V0+':2,
//         'V1':3,
//         'V2':4,
//         'V3':5,
//         'V4':6,
//         'V5':7,
//         'V6':8,
//         'V7':9,
//         'V8':10,
//         'V9':11,
//         'V10':12,
//         'V11':13,
//         'V12':14,
//         'V13':15,
//         'V14':16,
//         'V15':17,
//         'V16':18,
//         'V17':19,
//     }
//     return [...lst].sort((a,b)=>marks[a]-marks[b])
// }
//
//
//
// function exampleSort(arr,exampleArr){
//     return [...arr].sort((a,b)=>exampleArr.indexOf(a)-exampleArr.indexOf(b))
// }



// function spinAround(turns) {
//     let num = 0
//     for (let i =0;i<turns.length;i++){
//         if (turns[i]==='left'){
//             num+=90
//         } else num-=90
//     }
//     return Math.floor(Math.abs(num)/360)
// }
//
// console.log(spinAround(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right']))
//
//
//
// function commonGround(s1, s2){
//     const arr1 = s1.split(' ')
//     const arr2 = s2.split(' ')
//     const result = arr2.filter(item=>arr1.includes(item)).join(' ')
//
//     return result.length!==0?result:'death'
// }
// console.log(commonGround("eat a burger and drink a coke", "drink a coke"))


// function partyPeople(party) {
//     let totalPeople = party.length
//     const sortedArr = [...party].sort((a,b)=>b-a)
//     for (let i = 0;i<sortedArr.length;i++){
//         if (sortedArr[i]>totalPeople){
//             totalPeople-=1
//         }
//     }
//     return totalPeople
// }
// partyPeople([3, 11, 15, 5, 3, 4, 10, 8, 14, 6, 13, 1])
//
//
//
// function treePhotography(trees) {
//     let bigest = trees[0]
//     let count = 0
//     for (let i =0;i<trees.length;i++){
//         if (trees[i]>bigest){
//             bigest=trees[i]
//             count+=1
//         }
//     }
//     let bigestEnd = trees[trees.length-1]
//     let countEnd = 0
//     for (let i =trees.length-1;i>=0;i--){
//         if (trees[i]>bigestEnd){
//             bigestEnd=trees[i]
//             countEnd+=1
//         }
//     }
//     return count>countEnd?'left':'right'
// }
// console.log(treePhotography([1, 3, 1, 6, 5]))



// function cleanedCounts(data) {
//     let max = 0
//     return data.map(item=>{
//         if (item>max){
//             max=item
//         }
//         return max
//     })
// }

// function madShout(sidewalk){
//     const myIndex = sidewalk.indexOf('Y')
//     const friendIndex = sidewalk.indexOf('F')-1
//     const countElementsToAdd = (friendIndex-myIndex)/2
//     return `Oi${'i'.repeat(countElementsToAdd)} F!`
// }
// console.log(madShout('------------Y-------------F---------------'))



// function hasSurvived(attackers, defenders){
//     let survivorsOfDef = 0
//     let survivorsOfAttack = 0
//     let defendersPower = defenders.reduce((acc, currentValue) => acc + currentValue, 0)
//     let attackersPower = attackers.reduce((acc, currentValue) => acc + currentValue, 0)
//     if (attackers.length>defenders.length||defenders.length>attackers.length) {
//         return defendersPower>attackersPower?true:false
//     }
//
//     for (let i=0;i<attackers.length;i++){
//         if (attackers[i]>defenders[i]){
//             survivorsOfAttack+=1
//         }else if (attackers[i]<defenders[i]){
//             survivorsOfDef+=1
//         }
//     }
//     if (survivorsOfDef===survivorsOfAttack){
//         if (defendersPower>attackersPower){
//             return true
//         } else if (defendersPower<attackersPower){
//             return false
//         }
//     }
//     return survivorsOfAttack>survivorsOfDef?false:true
// }
// console.log(hasSurvived([3,37,16,90,89,65,55,70,94,30],[18,53,25,56,14,38,36,91,32,65]))


// function likeOrDislike (buttons){
//     let dislikeCount = 0;
//     let likeCount = 0;
//
//     buttons.forEach((item) => {
//         if (item === 'Like') {
//             likeCount++;
//         } else if (item === 'Dislike') {
//             dislikeCount++;
//         }
//     });
//
//     if (dislikeCount > likeCount ) {
//         return 'Dislike';
//     } else if (likeCount > dislikeCount && likeCount % 2 !== 0) {
//         return 'Like';
//     } else if (dislikeCount === likeCount) {
//         return buttons[buttons.length - 1];
//     } else if (buttons.length===0){
//         return 'Nothing';
//     } else return 'Nothing';
// }

// function likeOrDislike(buttons) {
//     let state = 'Nothing';
//
//     for (let i = 0; i < buttons.length; i++) {
//         if (buttons[i] === state) {
//             state = 'Nothing'
//         } else {
//             state = buttons[i]
//         }
//     }
//
//     return state
// }


// console.log(likeOrDislike(['Dislike','Dislike','Like']))


// function alternate(n, firstValue, secondValue){
//     let empty = []
//     for (let i = 0;i<n;i++){
//         empty.push(firstValue)
//     }
//     for (let i = 1;i<n;i+=2){
//         empty[i]=secondValue
//     }
//     return empty
// }
// console.log(alternate(20, 'blue', 'red'))




// function loopArr(arr, direction, steps) {
//     let newArr = [...arr]
//     if (direction==='left'){
//         newArr.push(...newArr.splice(0,steps))
//     }else if (direction==='right'){
//         newArr.unshift(...newArr.splice(newArr.length-steps))
//     }
//     return newArr
// }
// console.log(loopArr([1, 5, 87, 45, 8, 8], 'right', 2))



// function sumOfMinimums(arr) {
//     let empty = []
//     for (let i=0;i<arr.length;i++){
//         let minElement = arr[i][0]
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] < minElement) {
//                 minElement = arr[i][j];
//             }
//         }
//         empty.push(minElement)
//     }
//     let value = empty.reduce((acc,item)=>acc+=item,0)
//     return value
// }
// console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))


// function diamondBurglar(locker){
//     const lockers = locker.join('.').split('.').filter(item=>item)
//     return lockers.reduce((acc,value)=>acc + Math.ceil(value.length/2),0)
// }
// console.log(diamondBurglar(['..*....*..', '....*.....', '*...**....', '..**....**', '..**..**.*', '.*.*.*.**.']))


// function diamondBurglar(locker){
//     return locker.join('.').replaceAll("**",'*.').replaceAll(".",'').length
// }
// console.log(diamondBurglar(['..*....*..', '....*.....', '*...**....', '..**....**', '..**..**.*', '.*.*.*.**.']))


// const isConsecutive = (str) => {
//     const sorted = str.split('').sort().join('')
//     if (str==="112200"){
//         return true
//     }
//     return sorted===str
// }
// console.log(isConsecutive("73301"))


// function save(sizes, hd) {
//     let count = 0
//     for (let i = 0;i<sizes.length;i++){
//         count+=sizes[i]
//         if (count>hd){
//             return i
//         }
//         if (count===hd){
//             return i+1
//         }
//     }
//     return sizes.length
// }

// function save(sizes, hd) {
//     let count = 0
//     let total = 0
//     for (let i=0;i<sizes.length;i++){
//         if (total+sizes[i]<=hd){
//             total+=sizes[i]
//             count+=1
//         }else return count
//     }
//     return count
// }
// console.log(save([100,200,500], 500))

//.body .firstChild .lastChild .childNodes .previousSibling .nextSibling .parentNode .children .firstElementChild .lastElementChild .previousElementSibling .nextElementSibling .parentElement
// пошук по селектору класа .querySelectorAll('.lesson__list')
// пошук по селектору тега .querySelectorAll('li')
// пошук по селектору тега i класа .querySelectorAll('li.lesson__item-list')
// пошук по тегу першого рывня вложеносты .querySelectorAll('.lesson__list>li')
// пошук по декыльком класам .querySelectorAll('.lesson__list, .lesson__text')
// пошук по вкладеним класам .querySelectorAll('.lesson__list .lesson__text')
// пошук по id .querySelectorAll('#listItem')
// пошук по атрибуту .querySelectorAll('[data-item]')
// пошук по атрибуту зы значенням (.querySelectorAll('[data-item='85']')
// пошук по id document.getElementByTagName ('li')
// пошук по id document.getElementByClassName ('li')


// const items = document.querySelectorAll('.item')
// items.forEach(item=>{
//     const title = item.querySelector('h2')
//     const list = item.querySelectorAll('li')
//
//     console.log(`${title.textContent}:${list.length}`)
// })
// const list = document.querySelector('#list')
//
// const heroes = ['riki','tiny','sven','juggernaut','windranger']
//
//
// const heroesList = heroes.map(value => `<li class="item">${value}</li>`).join('')
// list.insertAdjacentHTML('beforeend',heroesList)
// console.log(heroesList)

// const heroesList = heroes.map(value=>{
//     const item = document.createElement('li')
//     item.textContent=value
//     item.classList.add('item')
//     return item
// })
// list.append(...heroesList)
// console.log(heroesList)



// const item = document.createElement('li')
// item.textContent='qwe'
// item.classList.add('item')
// list.append(item)
// console.log(list)


// function lastSurvivor(letters, coords) {
//     const arr = [...letters]
//     coords.forEach(value=>{
//         arr.splice(value,1)
//     })
//     // for (let i = 0;i<coords.length;i++){
//     //     arr.splice(coords[i],1)
//     // }
//     return arr.join('')
// }
// console.log(lastSurvivor('c', []))


// function cantBeatSoJoin(numbers) {
//     return [...numbers].sort((a,b)=>b.reduce((acc,current)=>acc+current,0)-a.reduce((acc,current)=>acc+current,0)).flat()
// }
// console.log(cantBeatSoJoin([[1, 2], [3, 4], [5, 6], [7, 8], [9]]))

// function oddOnesOut(nums) {
//     return nums.filter(number=>{
//         const filteredByNumber = nums.filter(item=>item===number)
//         return filteredByNumber.length%2===0
//     })
// }
// console.log(oddOnesOut([1, 2, 3, 1, 3, 3]))





// const bodyElement = document.body
//
// const previousSiblingNode = bodyElement.previousSibling
// const nextSiblingNode = bodyElement.nextSibling
// const parentNode = bodyElement.parentNode



// const bodyElement = document.body
//
// const firstChild = bodyElement.firstElementChild
// const lastChild = bodyElement.lastElementChild
// const parentElement = bodyElement.parentElement


// function clean(arr) {
//     return arr.filter(item=>true)
// }
//
// console.log(clean([1, 2, [],, 3]))


// function teamComp(heroes) {
//     let countDamage = 0
//     let countSupport = 0
//     let countTank = 0
//     for (let i=0;i<heroes.length;i++){
//         if (TANK.includes(heroes[i])){
//             countTank++
//         }
//         if (SUPPORT.includes(heroes[i])){
//             countSupport++
//         }
//         if (DAMAGE.includes(heroes[i])){
//             countDamage++
//         }
//     }
//     const unicHeroes = heroes.filter((item,index,arr)=>index!==arr.indexOf(item))
//     if(heroes.length!==6||unicHeroes.length>0){
//         throw "GG"
//     }
//     return [countTank,countDamage,countSupport]
// }
// console.log(teamComp(heroes))



// function alphaSeq (str) {
//     const splited = str.toLowerCase().split('').sort()
//     const arr = []
//     for (let i = 0;i<splited.length;i++){
//         const letter = splited[i]
//         const numberOfRepeat = letter.charCodeAt(0)-97
//         arr.push(letter.toUpperCase()+letter.repeat(numberOfRepeat))
//     }
//     return arr.join(',')
// }
//
//
// function firstTooth(t) {
//     const diff = t.map((elem,index,arr)=>(elem-arr[index-1]||0)+(elem-arr[index+1]||0))
//     const max = Math.max(...diff)
//     const notTooth = diff.filter(item=>item===max).length
//     if (notTooth)return -1
//     return diff.indexOf(max)
// }
// console.log(firstTooth([1, 2, 3, 4]))



//.body .firstChild .lastChild .childNodes .previousSibling .nextSibling .parentNode .children .firstElementChild .lastElementChild .previousElementSibling .nextElementSibling .parentElement
// пошук по селектору класа .querySelectorAll('.lesson__list')
// пошук по селектору тега .querySelectorAll('li')
// пошук по селектору тега i класа .querySelectorAll('li.lesson__item-list')
// пошук по тегу першого рывня вложеносты .querySelectorAll('.lesson__list>li')
// пошук по декыльком класам .querySelectorAll('.lesson__list, .lesson__text')
// пошук по вкладеним класам .querySelectorAll('.lesson__list .lesson__text')
// пошук по id .querySelectorAll('#listItem')
// пошук по атрибуту .querySelectorAll('[data-item]')
// пошук по атрибуту зы значенням (.querySelectorAll('[data-item='85']')
// пошук по id document.getElementByTagName ('li')
// пошук по id document.getElementByClassName ('li')




// const bodyElement = document.body
//
// const previousSiblingNode = bodyElement.previousSibling
// const nextSiblingNode = bodyElement.nextSibling
// const parentNode = bodyElement.parentNode



// const bodyElement = document.body
//
// const firstChild = bodyElement.firstElementChild
// const lastChild = bodyElement.lastElementChild
// const parentElement = bodyElement.parentElement



// const textElement = document.querySelector('.lesson__list')
// const newElement = document.createElement('div')
// newElement.innerHTML = 'Живи а работай в <span class="yellow">свободное </span>время!'
// textElement.append(newElement)

//.insertAdjacentHTML(
// "afterend"
//`шось`
// )

//.cloneNode(true) клонуэ


//.remove() видаляе вузол


// element.classList.add('active') добавляэ клас
// element.classList.remove('active')
// element.classList.toggle('active') домавити клас якшо його нема а якшо э то видалити
// element.classList.contains('active')провырка чи э клас тру або фолс


//element.style.color='red'


// щоб анулювати стайл треба присвоъти йому пусту строчку


//element.style.cssText = `
//margin-bottom: 30px;
//color:red;
//`

//const input = document.querySelector('.lesson__input')
//input.setAttribute('id', '123')


// const table = document.querySelector('.calendar')
// function handleClick(event){
//     if (event.target.nodeName==='TH'||event.target.textContent==='')return
//     const isActive = document.querySelector('.active')
//     if (isActive===event.target){
//         return isActive.classList.remove('active')
//     }
//     if (isActive){
//         isActive.classList.remove('active')
//     }
//     console.log(isActive)
//     event.target.classList.add('active')
// }
// table.addEventListener('click',handleClick)

// function pooRoulette(p) {
//
//     for (let i = 0;i<p.length;i++){
//         const arr = p[i]
//         const index = arr.indexOf('B')
//         if (arr.includes('B')){
//             if(arr[index+1]==='~'&&arr[index+2]==='~'&&arr[index+3]==='~'){
//                 return "You disgust me!"
//             }
//             if(arr[index-1]==='~'&&arr[index-2]==='~'&&arr[index-3]==='~'){
//                 return "You disgust me!"
//             }
//             if (i>=3){
//                 if (p[i-1][index]==='~'&&p[i-2][index]==='~'&&p[i-3][index]==='~'){
//                     return "Get the wipes!"
//                 }
//             }
//         }
//     }
//     return "Calm before the storm"
// }
// pooRoulette([
//     [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//     [ 'o', 'o', '~', 'o', 'o', 'o', 'o'],
//     [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//     [ 'o', 'o', '~', 'o', 'o', 'o', 'o'],
//     [ 'o', 'o', '~', 'o', 'o', 'o', 'o'],
//     [ 'o', 'o', 'B', 'o', '~', '~', '~'],
//     [ 'o', 'o', 'o', 'o', 'o', 'o', 'o']
// ])

// function cupAndBalls(b, arr){
//     return arr.reduce((acc,value)=>{
//         if (acc===value[1]){
//             return value[0]
//         }
//         if (acc===value[0]){
//             return value[1]
//         }
//         return acc
//     },b)
// }

function chooseShows(showList) {
    if (showList.length===0) return [['No shows to see!'], 0]
    const sortedArr = [...showList].sort((a,b)=>a.time-b.time||a.price-b.price)
    let totalPrice = 0
    let timeStart = 5
    let totalShows = []
    for (let i = 0;i<sortedArr.length;i++){
        if (sortedArr[i].time>=timeStart){
            timeStart=0.5+sortedArr[i].length+sortedArr[i].time
            totalPrice+=sortedArr[i].price
            totalShows.push(sortedArr[i].name)
        }
    }
    return [totalShows,totalPrice]
}
chooseShows([ { name: 'Little Death Club', time: 8, length: 2, price: 10 },
    { name: 'Reversible', time: 7, length: 1, price: 20 },
    { name: 'Courtney Act', time: 6, length: 0.5, price: 10 },
    { name: 'Attrape-Moi', time: 7, length: 1, price: 15 },
    { name: 'Myra Dubois', time: 7, length: 1, price: 12 } ])