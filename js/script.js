'use strict'
// concat parseInt parseFloat push pop shift unShift splice includes indexOf split join
// як працюэ метод що потрыбно передавати в аргументах що повертаэ метод
// на 119 рядку розвернути рядок за допомогою метода reverse
//? Створіть масив genres з елементами Jazz і Blues.
// ? Додайте «Рок-н-рол» до кінця.
// ? Виведіть у консоль перший елемент масиву.
// ? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
// ? Видаліть перший елемент та виведіть його в консоль.
// ? Вставте «Country» та «Reggy» на початок масиву.
//  */

// const arr = [1,2,3,1]
// const arr2 = [4,5,6]
// const arr3 = arr.concat(arr2)
// console.log(arr.splice(2,1))
// console.log(arr)



// let arr = ['Jazz' , 'Blues']
// arr.push('Рок-н-рол')
// console.log(arr[arr.length-1])
// console.log(arr.unshift('qwe'))
// arr.unshift('Country', 'Reggy')
// console.log(arr)

// let a = 10;
// const b = a;
// a = 21;
// console.log(a)
// console.log(b)
// console.log(a === b)


// const a = [10];
// const b = a;
// a.push(21)
// console.log(a === b)
// console.log([] === [])

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"]

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

// for(const fruit of fruits ) {
//     console.log(fruit)
// }

/*
? Напиши скрипт пошуку найменшого числа у масиві.
? Код має працювати для будь-якого масиву чисел.
? Використовуйте цикл для вирішення задачі.
*/

// const numbers = [2, 17, 94, 1, -20, -50, 23, 37];
//
// let min = numbers[0]
// // for(const number of numbers){
// //     if(number < min){
// //         min = number;
// //     }
// // }
// for(let i = 0; i < numbers.length ; i++){
//     if(numbers[i] < min){
//         min = numbers[i]
//     }
// }
// console.log(min)


// const genres = ["Jazz", "Blues", "Rock 'n' roll", "Country", "Reggy"]
// let max = genres[0]
// // for(let i = 0; i < genres.length; i++){
// //     if(max.length < genres[i].length){
// //         max = genres[i]
// //     }
// // }
// for(const word of genres){
//     if(max.length < word.length){
//         max = word
//     }
// }
// console.log(max)

/*
? У нас є масив із зарплатами працівників, потрібно порахувати загальну суму зарплат
*/

// const salaries = [200, 450, 600, 150, 300];
// let sumSalaries = 0
// // for(let i=0; i < salaries.length; i++){
// //     sumSalaries += salaries[i]
// // }
// for(const salary of salaries){
//     sumSalaries += salary
// }
// console.log(sumSalaries)

/*
? У нас є кілька масивів із зарплатами співробітників з
? різних відділів, потрібно порахувати загальну суму зарплат
*/

// const managerSalaries = [1000, 1500, 2500, 4000, 5000];
// const developersSalaries = [8000, 15000, 40000];
//
// const arr3 = managerSalaries.concat(developersSalaries)
// let sum = 0
// for (const salary of arr3) {
//     sum += salary
// }
// console.log(sum)


/*
? Напиши скрипт, який «розвертає» рядок (зворотний порядок букв)
? та виводить її в консоль.
*/
//у масива э метод reverse
// const string = "Welcome to the future!";
//
// let reversedStr = ''
//
// for(let i = 0; i < string.length;i++){
//     reversedStr += string[string.length-1-i]
// }
// console.log(reversedStr)

// const string = "Welcome to the future!";
//
// let stringArr = string.split('')
// let reversed = stringArr.reverse()
// let newString = reversed.join('')
//
// console.log(newString)

//splice slice 🍎🍎🍎🍎
//якшо ключ находиться в перемнній до обєкта звертаємось через квадратні душки
//object keys object values
//ключами в обєкті можуть бути тільки рядки
//диструктаризація
//методи обєктів , колбек функція , перебираючі методи масивів


// const user = {name: 'mango', age: 21,  email: 'mango@gmail.com'}
// const userName = 'name'
// user[userName] = 'poly'
// const userLocation = 'location'
// user[userLocation] = 'Ternopil'
// const c =  33
// user[c] = 'not work'
// console.log(user['33'])
// console.log(typeof {})
// console.log(Array.isArray({}))

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
//
// const {John: asdasdasd , Ann , Pete} = salaries
// console.log(asdasdasd,Ann,Pete)
//
//
// const arr = [1,2,3,4,5]
//
// const [asdasd , second ,,,five] = arr
// console.log(asdasd,second,five)


// console.log('A'.charCodeAt(0))
// console.log('Z'.charCodeAt(0))
// console.log('a'.charCodeAt(0))
// console.log('z'.charCodeAt(0))



// const allSalaries = Object.values(salaries)
// console.log(allSalaries)
// let total = 0
// // for(let i = 0; i<allSalaries.length;i++){
// //     total += allSalaries[i]
// // }
// for(const salary of allSalaries){
//     total += salary
// }
// console.log(total)



// const allKeys = Object.keys(salaries)
// console.log(allKeys)
// for(const key of Object.keys(salaries)){
//   console.log(key)
//   console.log(salaries[key])
// }



// const entries = Object.entries(salaries)
// console.log(entries)
// for(const [key,value] of entries){
//   // console.log(entry)
//   // console.log(entry[0])
//   console.log(key,value)
// }



// const filmoteka = [
//   {
//     id: 1,
//     title: 'Duna',
//     description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     rating: 10,
//     actors: [
//       'Amelia Gibson',
//       'Cameron Clayton',
//       'Viola Vasquez',
//       'Lula Collins',
//       'Victor Nichols',
//     ],
//     adult: false,
//     image: 'https://via.placeholder.com/640/480',
//   },
//   {
//     id: 2,
//     title: 'Venom',
//     description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     rating: 8,
//     actors: [
//       'Inez Greer',
//       'Barry Curtis',
//       'Blanche Rios',
//       'Glen Perry',
//       'Logan Powers',
//     ],
//     adult: true,
//     image: 'https://via.placeholder.com/640/480',
//   },
//   {
//     id: 3,
//     title: 'Luca',
//     description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     rating: 9,
//     actors: [
//       'Marguerite Gibbs',
//       'Lora Alvarez',
//       'Jorge Simpson',
//       'Thomas Hall',
//       'Darrell Hunter',
//     ],
//     adult: false,
//   },
//   {
//     id: 4,
//     title: 'Free Guy',
//     description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     rating: 6,
//     actors: [
//       'Calvin Andrews',
//       'Mamie Myers',
//       'Madge Townsend',
//       'Ralph Kim',
//       'Jorge Reese',
//     ],
//     adult: false,
//     image: 'https://via.placeholder.com/640/480',
//   },
//   {
//     id: 5,
//     title:  'Saw',
//     description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     rating: 7,
//     actors: [
//       'Adele Marsh',
//       'Melvin Burgess',
//       'Jesus Reese',
//       'Harriet Moreno',
//       'Curtis Cox',
//     ],
//     adult: true,
//   },
// ];

// function getAllTitlesOfFilms(films){
//   const allTitles = []
//   for(const film of films){
//     allTitles.push(film.title)
//   }
//   return allTitles;
// }
// console.log(getAllTitlesOfFilms(filmoteka))



//? Напишіть функцію findFilmByName(films, filmTitle), яка шукає фільм за назвою.
// function findFilmByName(films, filmTitle){
//   for(const film of films){
//     if(film.title ===  filmTitle){
//       return film
//     }
//   }
//   return 'nothing found'
// }
// console.log(findFilmByName(filmoteka, 'sfdsdf'))



//? Напишіть функцію getAdultFilms(films), яка повертає масив усіх дорослих фільмів.
// function getAdultFilms(films) {
//   const arrAdultFilms = []
//   for(const film of films){
//     if (film.adult){
//       arrAdultFilms.push(film)
//     }
//   }
//   return arrAdultFilms;
// }
// console.log(getAdultFilms(filmoteka))

/*
? Напишіть ф-цію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок під назвою каменю.
? Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям.
*/
//
// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];
//
// function calcTotalPrice(stones, stoneName){
//   let totalPrice = 0
//   for(let stone of stones){
//     if (stone.name === stoneName){
//       totalPrice += stone.price * stone.quantity
//     }
//   }
//   return totalPrice
// }
// console.log(calcTotalPrice(stones, 'Смарагд'))
//
//
//
//
//
//
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(function (accumulator, number) {
//   return accumulator + number;
// }, 0);
// console.log(sum);

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"]
//
// const newArr = fruits.unshift("🍋")
// fruits.push("🍇")
// console.log(fruits)


// const vehicles = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];
//
//
// function calculateVehicles(vehicles,model){
//   let total = 0
//   for(const car of vehicles){
//     if(car.model === model){
//       total += car.price * car.amount
//     }
//   }
//   return total
// }
// console.log(calculateVehicles(vehicles,'CX-9'))



// function friend(friends){
//   const myFriends = []
//   for(const name of friends){
//     if (name.length===4){
//       myFriends.push(name)
//     }
//   }
//   return myFriends
// }
//
// console.log(friend(["Ryan", "Kieran", "Mark"]))


// function findNextSquare(sq) {
//   const number = Math.sqrt(sq)
//   const isInteger = Number.isInteger(number)
//   if(isInteger){
//     return Math.pow(number+1,2)
//   }
//   return -1;
// }
// console.log(findNextSquare(114))


// function getName(name,callback){
//   callback(name)
// }
//
//
// getName('mango',function showName(name){
//   console.log(name)
// })


//5 задач з код варс
// стрілочні функції
// пере бираючі методи масивів forEach() map() filter() приклади використання
// що повертає які параметри оголошує колбек функція для чого використовуєтсья
// const numbers = [1,2,3,4,5]
// spread rest

// const year = 2000
// function isLeapYear(year) {
//
//     if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//         return true;
//     }
//
//   return false;
// }
//
// console.log(isLeapYear(year))

// function validatePIN(pin) {
//   if (pin.length === 4 || pin.length === 6) {
//     return !isNaN(pin);
//   }
//   return false;
// }
//
// console.log(validatePIN("1234"));
// console.log(validatePIN("12345"));
// console.log(validatePIN("123456"));
// console.log(validatePIN("a1b2c3"));
//
// console.log(!isNaN('21'))

// function descendingOrder(n){
//   let reversed = ''
//   for(let i = 0; i<n.length; i++){
//     reversed += n[n.length-1-i]
//   }
//   return parseInt(reversed)
// }
// console.log(descendingOrder(12345))



//'10'>'2'
// console.log([1,2,3,100].sort((a, b)=>a-b))
// function descendingOrder(n){
//   const arrNumbers = n.toString().split('')
//   const sortedNumbers = arrNumbers.sort((a, b)=>b-a)
//   console.log(sortedNumbers.join(''))
//   return Number(sortedNumbers.join(''))
// }
//
// console.log(descendingOrder(129345))


// function sumTwoSmallestNumbers(numbers) {
//   let total = ''
//   for(let i=0;i<numbers.length;i++){
//     if(number[i]){
//
//     }
//   }
// }


// const numbers = [1, 2, 3, 4, 5];
//
// numbers.forEach(function(number) {
//   console.log(number);
// });

// const numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7]
//
// const filteredArr = []
//
// for(let i=0; i<numbers.length;i++){
//   if(i === numbers.indexOf(numbers[i])){
//     filteredArr.push(numbers[i])
//   }
// }
// console.log(filteredArr)


// function countSheeps(sheep) {
//   let count = 0;
//   for(let i=0;i<sheep.length;i++){
//     if(sheep[i]===true){
//       count+=1
//     }
//   }
//   return count
// }
//
//
//
// console.log(countSheeps([true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]))


// function toUpperCase (string) {
//   let newString = ''
//   for(let i = 0; i<this.length;i++){
//     if(this[i]===this[i].toUpperCase()){
//       newString += this[i].toLowerCase()
//     } else {
//       newString += this[i].toUpperCase()
//     }
//   }
//   return newString;
// }
//
// console.log(toUpperCase("HeLLo WoRLD"))



  // function findSmallestInt(args) {
  //   let theSmallestNumber = args[0]
  //   for (let i = 0; i<args.length;i++){
  //     if (args[i]<theSmallestNumber){
  //       theSmallestNumber = args[i]
  //     }
  //   }
  //   return theSmallestNumber
  // }
  //
  // console.log(findSmallestInt([34, 15, 88, 2]))

// const numbers = [1,2,3]
// console.log(Math.min(...numbers))



// function evenOrOdd(number) {
//     if(number % 2 === 0){
//         return "Even"
//     } else{
//         return "Odd"
//     }
// }
//
// console.log(evenOrOdd(5))

// function basicOp(operation, value1, value2){
//     if (operation === '+'){
//         let plus = value1+value2
//         return plus
//     }else if (operation === '-'){
//         let minus = value1-value2
//         return minus
//     }else if (operation === '/'){
//         let divide = value1/value2
//         return divide
//     }else if (operation === '*'){
//         let multiplication = value1*value2
//         return multiplication
//     }
// }


// function litres(time) {
//     let water = time * 0.5
//     return Math.floor(water)
// }


// const arr = [1,2,3,4,5]
//
// function sum (...arr){
//
//     console.log(arr)
// }
// sum (1, 2,3,4,5)


// function lovefunc(flower1, flower2){
//         return flower1 % 2 !== flower2 % 2
// }
//
// console.log(lovefunc(1, 4))


// function squareOrSquareRoot(array) {
//
//     return array.map((element)=>{
//         if(Number.isInteger(Math.sqrt(element))){
//            return Math.sqrt(element)
//         }else {
//             return Math.pow(element,2)
//         }
//     });
// }


// function squareOrSquareRoot(array) {
//
//     return array.map((element)=>{
//         return Number.isInteger(Math.sqrt(element)) ? Math.sqrt(element) : Math.pow(element,2)
//     });
// }
// console.log(squareOrSquareRoot([4,3,9,7,2,1]))


// function mergeArrays(a, b) {
//     return [...a,...b].filter((element,index,array)=>index===array.indexOf(element)).sort((a,b)=>a-b)
// }
// function mergeArrays(a, b) {
//     let c = [...a,...b]
//     let filtered = []
//     for (let i=0;i<c.length;i++){
//         if(i === c.indexOf(c[i])){
//             filtered.push(c[i])
//         }
//     }
//     return filtered.sort((a,b)=>a-b)
// }


// console.log(mergeArrays([1, 3, 5], [2, 4, 6]))


// const arr = [1,2,3]
// const arr2 = [4,5]
//
// console.log([...arr,...arr2])





// function makeNegative(num) {
//     return num <= 0 ? num : -num
// }


// function isUpperCase (string) {
//     for(let i =0;i<string.length;i++){
//         if(string[i] !== string[i].toUpperCase()){
//             return false
//         }
//     }
//     return true
// }
//
// function isUpperCase (string) {
//     return string == string.toUpperCase()
// }
//
// console.log(isUpperCase ("ACSKLDFJSGSKLDFJSKLDFJ"))


// function hero(bullets, dragons){
//     if(bullets >= dragons*2){
//         return true
//     } else return false
// }
//
// console.log(hero(100, 40))


// function greet(name){
//     return `Hello, ${name} how are you doing today?`;
// }
//
// console.log(greet('Vitaliy'))

// function whoseMove(lastPlayer, win) {
//     if(lastPlayer === "black" && win === true){
//         return "black"
//     } else if(lastPlayer === "black" && win === false){
//         return "white"
//     } else if(lastPlayer === "white" && win === false) {
//         return "black"
//     }else if(lastPlayer === "white" && win === true) {
//         return "white"
//     }
// }


// function whoseMove(lastPlayer, win) {
//     return win?lastPlayer:lastPlayer=="white"?"black":"white"
// }


// function feast(beast, dish) {
//     if(beast[0] === dish[0] && beast[beast.length-1]===dish[dish.length-1]){
//         return true
//     }else return false
// }



// function max (list){
//     let theBigest = list[0]
//     for(let i=0;i<list.length;i++){
//         if(theBigest<list[i]){
//             theBigest = list[i]
//         }
//     }
//     return theBigest
// }
//
// console.log(max ([42, 54, 65, 87, 0]))
//
// function min (list){
//     let theSmallest = list[0]
//     for(let i=0;i<list.length;i++){
//         if(theSmallest>list[i]){
//             theSmallest = list[i]
//         }
//     }
//     return theSmallest
// }
//
// console.log(min ([42, 54, 65, 87, 0]))


// const addArrow = (a, b) => ({a , b});
//
//
// console.log(addArrow(2,3))

// const arr = [1,2,3,4].map((element)=>{return element *2})
// console.log(arr)

// const numbers = [1,1,2,2,3,3,4,4]
// const filteredArr = []
// for(let i =0;i<numbers.length;i++){
//     if(i===numbers.indexOf(numbers[i])){
//         filteredArr.push(numbers[i])
//     }
// }
// console.log(filteredArr)
// const filteredArr = numbers.filter((element,index,arr)=>arr.indexOf(element)===index)

// const str = 'java script це цікаво'
// const reversedStr = str.split('').reverse().join('')
// const arr = []
// str.split('').forEach((element)=>{arr.unshift(element)})
// for(let i=0;i<str.length;i++){
//     console.log(str[str.length-1-i])
// }
//
// console.log(arr.join(''))


// function describeAge(age) {
//     if (age <= 12) {
//         return "You're a(n) kid";
//     } else if (age >= 13 && age <= 17) {
//         return "You're a(n) teenager";
//     } else if (age >= 18 && age <= 64) {
//         return "You're a(n) adult";
//     } else {
//         return "You're a(n) elderly";
//     }
//     // return age<=12?"You're a(n) kid":age<=17?"You're a(n) teenager":age<=64?"You're a(n) adult":"You're a(n) elderly"
//     return `You're a(n) ${age<=12?"kid":age<=17?"teenager":age<=64?"adult":"elderly"}`
// }


// function removeChar(str){
//     let emptyStr = ''
//     for(let i = 1;i<str.length-1;i++){
//         emptyStr+=str[i]
//     }
//     return emptyStr
// };
//
// function removeChar(str) {
//     return str.slice(1, -1);
// }


// function abbrevName(name){
//     const arr = name.split(' ')
//     return `${arr[0][0]}.${arr[1][0]}`
// }
//
// console.log(abbrevName('Sam Harris'))

// const name = 'mango'
// console.log({name})

// function isDigit(s) {
//     return Number(s)
// }
//
// // console.log(isDigit('-234.4f'))
//
// console.log(NaN===NaN)




// function findAverage (nums) {
//     let total = nums.reduce((acc, number)=>acc + number, 0);
//     return total/nums.length
// }
//
//
// console.log(findAverage([1, 3, 5, 7]))
//
//
// function firstNonConsecutive (arr) {
//     for (let i=0;i<arr.length-1;i++) {
//         if (arr[i + 1] - arr[i] !== 1) {
//             return arr[i + 1]
//         }
//     }
//     return null
// }
// console.log(firstNonConsecutive ([1,2,3,4]))
//
//
//
//
//
// function twoSort(s) {
//     let sorted = [...s].sort();
//     let firstSorted = sorted[0].split('').join('***')
//     return firstSorted
// }
//
// console.log(twoSort(["BTC","Bitcoin","Bitcoin","Classic","Classic","Classic","Classic","DarkCoin","Dogecoin","Ethereum","Factom","LiteCoin","Mine","Ripple","Waves"]))
//
// function findMultiples(integer, limit) {
//     let arr = []
//     for(let i = integer;i<=limit;i++){
//         if(i % integer === 0 ){
//             arr.push(i)
//         }
//     }
//     return arr
// }



// function distinct(a) {
//     return a.filter((element,index,arr)=>index===arr.indexOf(element))
//     // let arr = []
//     // for(let i =0;i<a.length;i++){
//     //     if(i===a.indexOf(a[i])){
//     //         arr.push(a[i])
//     //     }
//     // }
//     // return arr
// }




// function addLength(str) {
//     // const arr = str.split(' ')
//     // return arr.map(element=>`${element} ${element.length}`)
//     const arr = str.split(' ')
//     let finalArr = []
//     for(let i = 0;i<arr.length;i++){
//         finalArr.push(`${arr[i]} ${arr[i].length}`)
//     }
//     return finalArr
// }
// console.log(addLength('apple ban'))



// function rapNameGen(dob) {
//     const day = Math.ceil((Number(dob[0])+Number(dob[1]))/2)
//     const year = Math.ceil((Number(dob[dob.length-1])+Number(dob[dob.length-2]))/2)
//     const obj = {
//         0:'0ero',
//         1:'1ne',
//         2:'2wo',
//         3:'3hree',
//         4:'4our',
//         5:'5ive',
//         6:'6ix',
//         7:'7even',
//         8:'8ight',
//         9:'9ine'
//     }
//     return `${obj[day]} ${obj[year]}`
// }
// rapNameGen('23.11.93')



// function array(string) {
//     let newStr = ''
//     for(let i=1;i<string.length-1;i++){
//         newStr+=string[i]
//     }
//     const updateStr = newStr.replaceAll(',',' ').trim()
//     console.log(updateStr)
// }
// array('1,2,3,4')


// function array(string) {
//     const arr = string.split(',')
//     let newStr = ''
//     for(let i=1;i<arr.length-1;i++){
//         newStr+=arr[i]
//     }
//     console.log([...newStr].join(' '))
// }
// array('1,2,3,4')



// function array(string) {
//     const arr = string.split(',')
//     if (arr.length<3){
//         return null
//     }
//     arr.pop()
//     arr.shift()
//     return arr.join(' ')
// }
// array('1,2,3,4')
//
// function array(arr){
//     return arr.split(",").slice(1,-1).join(" ") || null;
// }




// function printArray(array){
//     return array.join(',')
// }
// console.log(printArray(["h","o","l","a"]))
//
//
//
// function removeEveryOther(arr){
//     return arr.filter(function(element,index) {
//         return index % 2 === 0;
//     });
// }
// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))



// function points(games) {
//     let newArr = games.map(item => item.replace(':', ''))
//     let dijitArr = newArr.join('').split('')
//     let filteredDigitsStr = dijitArr.filter((digit, index) => {
//         return index % 2 === 0;
//     });
//     let numbersArr = games.map(item => parseInt(item));
//     let total = numbersArr.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue;
//     }, 0);
//     return total
// }



// function findAverage(array) {
//     if (array.length === 0) {
//         return 0;
//     }
//     return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)/ array.length;
// }
//
// console.log(findAverage([1,2,3,4]))
//
//
//
// function stringToArray(string){
//     return string.split(' ')
// }
//
// function points(games) {
//     let score = 0
//     let numbersArr = games.map(item => item.replace(':', '')).join('').split('')
//     for (let i = 0;i<numbersArr.length;i+=2){
//         if (numbersArr[i]>numbersArr[i+1]){
//             score+=3
//         }else if(numbersArr[i]===numbersArr[i+1]){
//             score++
//         }
//     }
//     return score
// }
//
// console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]))


// let arr = ['1', '2', '3', '4', '5', '6', '7', '8']
// for (let i = 0;i<arr.length;i+=2){
//     console.log(arr[i])
// }



// function multipleOfIndex(array) {
//     return array.filter((element,index)=> {
//         if (element===0&&index===0) {
//             return true
//         }return element%index===0
//     })
// }
//
// console.log(multipleOfIndex([0, 2, 3, 6, 9]))
//
// function digitize(n) {
//     return n.toString().split('').reverse().map(item=>Number(item))
// }
//
// function getAverage(marks){
//     return Math.floor(marks.reduce((acc,element)=>acc+=element,0)/marks.length)
// }
// getAverage([1,1,1,1,1,1,1,2])
//
//
// function grow(x){
//     return x.reduce((acc,item)=>acc*=item,1)
// }
//
//
// function invert(array) {
//     return array.map(item=>item*-1)
// }
//
// function fixTheMeerkat(arr) {
//     return arr.reverse()
// }
//
// function gooseFilter (birds) {
//     const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return birds.filter(bird=>!geese.includes(bird))
// }

// function flip(d,a){
//     return [...a].sort((a,b)=>d==='R'?a-b:b-a)
// }



// let arr = ['a', 'e', 'i', 'o', 'u']
// for (let i=0;i<arr.length;i++){
//     console.log(arr[i].charCodeAt(0))
// }

// function isVow(a){
//     let arr = ['a', 'e', 'i', 'o', 'u']
//     return a.map(item=>{
//         const letter = String.fromCharCode(item)
//         console.log(arr.includes(letter))
//         return arr.includes(String.fromCharCode(item))?String.fromCharCode(item):item})
// }
// isVow([101,121,110,113,113,103,121,121,101,107,103])
//
//
// function monkeyCount(n) {
//     let arr = []
//     for (let i = 1;i<=n;i++){
//         arr.push(i)
//     }
//     return arr
// }
//
//
// function check(a, x) {
//     return a.includes(x)
// }



//класи функції конструктори



// function maps(x){
//     return x.map(element=>element*2)
// }
// console.log(maps([4, 1, 1, 1, 4]))
//
//
// function check(a,x){
//     return a.includes(x)
// }



// function sum (numbers) {
//         return numbers.reduce((acc,number)=>acc+=number)
// }
// console.log(sum([4, 1, 1, 1, 4]))


// function countBy(x, n) {
//         let q = [];
//         for (let i=x;i<=n*x;i++){
//                 if (i%x===0){
//                         q.push(i)
//                 }
//         }
//         return q;
// }
// console.log(countBy(2,5))


// function sumMix(x){
//         return x.reduce((acc,number)=>acc+=Number(number),0)
// }
// console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))
//
//
// function mergeArrays(arr1, arr2) {
//         let arr3 = []
//         arr3.push(...arr1,...arr2)
//         return arr3.sort((a,b)=>a-b).filter((item, index) => arr3.indexOf(item) === index)
// }
// console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]))


// class Person {
//         constructor(name, age) {
//                 console.log(name)
//                 console.log(age)
//                 this.name = name;
//                 this.age = age;
//         }
//
//         greet() {
//                 console.log(this)
//                 console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//         }
// }

// Створення нового екземпляру класу Person
// const person1 = new Person('Alice', 25);
// const person2 = new Person('Bob', 30);

// person1.showMessage=function () {
//         console.log(this===person1)
// }
// person1.showMessage()
// console.log(person1)
// const showMessage = person1.greet
// showMessage()
//this ыснуэ тыльки в середины функцый
//на this впливаэ те де викликаэтсья функцыя а не де була вона оголошена
// const ladder = {
//         step: 0,
//         up(){
//                 this.step+=1
//                 return this
//         },
//         down(){
//                 this.step-=1
//                 return this
//         }
// }
// ladder.down().up().up()
// console.log(ladder.step)

/*
? Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю, розраховує
? та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.
*/

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//         calcTotalPrice (stoneName){
//           for (let i = 0;i<this.stones.length;i++){
//                   if (this.stones[i].name===stoneName){
//                           return this.stones[i].price*this.stones[i].quantity
//                   }
//           }
//         }
// };
//
// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
//

/*
? Створіть об'єкт calculator із трьома методами:
?
? read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
? add() - повертає суму збережених значень.
? mult() - перемножує збережені значення та повертає результат.
*/


// const calculator = {
//         read(a, b){
//                 this.a=a
//                 this.b=b
//         },
//         add(){
//                 return this.a+this.b
//         },
//         mult() {
//                 return this.a*this.b
//         },
// }
// calculator.read(2,3)
// console.log(calculator.add())
// console.log(calculator.mult())
// console.log(calculator)


/*
 * Працюємо з колекцією товарів у кошику:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

// const cart = {
//         items : [],
//
//         getItems(){
//                 return this.items
//         },
//         add(product){
//                 this.items.push({...product,quantity:1})
//         },
//         remove(productName){
//                 this.items=this.items.filter(item=>item.name !== productName)
//         },
//         clear(){
//                 this.items = []
//         },
//         countTotalPrice(){
//                 return this.items.reduce((acc,item)=>acc+=item.price,0)
//         },
//         increaseQuantity(productName){
//                 this.items=this.items.map(item=>{
//                         if (item.name===productName){
//                                 item.quantity+=1
//                         }
//                         return item
//                 })
//         },
//         decreaseQuantity(productName){
//                 this.items=this.items.map(item=>{
//                         if (item.name===productName){
//                                 item.quantity-=1
//                         }
//                         return item
//                 })
//         }
// }
// cart.add({ name: '🍎', price: 50 })
// cart.add({ name: '🍇', price: 70 })
// cart.add({ name: '🍋', price: 60 })
// cart.add({ name: '🍓', price: 110 })
// cart.increaseQuantity('🍎')
// console.log(cart.countTotalPrice())
// console.table(cart.getItems())



// function well(x){
//         let good = x.filter(item=>item ==='good').reduce((accumulator, currentValue) => accumulator+=1,0)
//         if (good>2){
//                 return 'I smell a series!'
//         } else if (good<=2&&good>0){
//                 return 'Publish!'
//         }else return 'Fail!'
// }
//
// console.log(well(['bad', 'bad', 'bad']))
//
// const well = x => {
//         const good_count = x.filter(x => x == 'good').length;
//         return good_count < 1 ? 'Fail!' :
//             good_count < 3 ? 'Publish!' : 'I smell a series!';
// }




// function all(arr, fun) {
//         for (let i = 0; i < arr.length; i++) {
//                 if (fun(arr[i])===false) {
//                         return false;
//                 }
//         }
//         return true;
// }




// function all( arr, fun ){
//         return arr.every(fun)
// }



// function all(arr, fun) {
//         for (let i = 0; i < arr.length; i++) {
//                 if (arr[i]<9){
//                         return true
//                 }else if (arr[i]>9){
//                         return false
//                 }
//         }
// }
// console.log(all([1,2,3,4,5],9))

// function first(arr, n) {
//         // return arr.slice(0,n)
//         let total = []
//         if (n===0)return []
//         for (let i=0;i<n;i++){
//                 if (arr[i]===undefined){
//                         continue
//                 }
//                 total.push(arr[i])
//         }
//         return total
// }
//
// console.log(first(['a', 'b', 'c', 'd', 'e'], 10))


// const numbers = [1,2,3,4,5,6]
//
// const qwe = numbers.filter((num,index)=>index%2 !==0)
//
// console.log(qwe)


// function howMuchILoveYou(nbPetals) {
//         const phrases = ["not at all","I love you","a little","a lot","passionately","madly","not at all"]
//        const index = nbPetals%6
//         console.log(index)
// }
// howMuchILoveYou(3)


// class Warrior {
//     #hp
//     constructor({skill,name,damage,hp}) {
//         this.skill = skill
//         this.name = name
//         this.damage = damage
//         this.#hp = hp
//     }
//     punch(){
//         console.log('damage:',this.damage)
//     }
//     getHp(){
//         console.log('hp',this.#hp)
//     }
// }
// const riki = new Warrior({name:'riki', skill:'poof', damage:'50', hp:'450'})
// console.log(riki)
// riki.getHp()
// riki.punch()
// const juggernaut = new Warrior({name:'juggernaut', skill:'omnislash', damage:'60', hp:'500'})
// console.log(juggernaut)
// juggernaut.punch()
// const vod = new Warrior({name:'void',skill:'chronosphere',damage:'70',hp:'600'})
// console.log(vod)
// //весь 9 роздыл ы 7.2
//
//
//
// function warnTheSheep(queue) {
//     const index = queue.indexOf('wolf')
//     if (queue.length-1===index){
//         return "Pls go away and stop eating my sheep"
//     }else return `Oi! Sheep number ${queue.length-1-index}! You are about to be eaten by a wolf!`
// }


// class Animal{
//     constructor(name) {
//         this.name = name
//         this.speed=0
//     }
//     run(speed){
//         this.speed = speed
//         console.log(`${this.name} runs with speed ${this.speed}`)
//     }
//     stop(){
//         this.speed = 0
//         console.log('we stoped animal')
//     }
// }
// class Rabbit extends Animal{
//     constructor(name,age) {
//         super(name)
//         this.age = age
//     }
//     hide(){
//         console.log('hidden')
//     }
//     stop(){
//         super.stop()
//         this.hide()
//     }
// }
// const rabbit = new Rabbit('Rabbit',2)
// rabbit.stop()
// console.log(rabbit)



// class CoffeeMachine{
//     #waterAmount = 0;
//      static Max = 100
//     static GetNumberCoffeeMachine() {
//          return Math.random()
//     }
//     constructor(power) {
//         this.power = power;
//     }
//     set addWatter(value){
//         this.#waterAmount += value;
//     }
//     get waterAmount(){
//         return this.#waterAmount;
//     }
//     get max(){
//          console.log(CoffeeMachine.Max)
//     }
//     createCoffee(){
//         if (this.#waterAmount >=200){
//             this.#waterAmount -=200
//             console.log('we created cup of coffee')
//         }else {
//             console.log('sorry but watter in coffee machine is out')
//         }
//     }
// }
// const coffeeMachine = new CoffeeMachine(100)
// coffeeMachine.max
// console.log(CoffeeMachine.GetNumberCoffeeMachine())
// console.log(coffeeMachine.__proto__)
// console.log(CoffeeMachine.prototype===coffeeMachine.__proto__)
// console.log(coffeeMachine.waterAmount)
// console.log(coffeeMachine.waterAmount);
// coffeeMachine.addWatter=1000
// coffeeMachine.createCoffee()
// coffeeMachine.createCoffee()
// coffeeMachine.createCoffee()
// coffeeMachine.createCoffee()
// coffeeMachine.createCoffee()
// coffeeMachine.createCoffee()

//властивості класу доступні на екземплярах класу
//методи класу доступні на екземплярах класу
//приватні властивості доступні лише в середині класу
//приватні методи доступні лише в середині класу
//статичні властивості доступні лише на самому класі
//статичні методи доступні лише на самому класі

// const user = {
//     name: 'mango'
// }
// user.age = 21
// user.getName = function () {
//     return this.name
// }
// console.log(user.getName())
//
// const numbers = [1, 2, 3, 4, 5]
// Array.prototype.square = function (){
//     return this.map(element=>Math.pow(element,2))
// }
// Array.prototype.cube = function (){
//     return this.map(element=>Math.pow(element,3))
// }
// Array.prototype.average = function (){
//     return this.reduce((acc,element)=> acc+element,0)/this.length
// }
// Array.prototype.sum = function (){
//     return this.reduce((acc,element)=> acc+element,0)
// }
// Array.prototype.even = function (){
//     return this.filter(number=>number%2===0)
// }
// Array.prototype.odd = function (){
//     return this.filter(number=>number%2!==0)
// }
// console.log(numbers.square())

// function isEven(n) {
//     return n % 2 === 0;
// }
//
// function isOdd(n) {
//     return n % 2 === 1;
// }
// function deleteValues(array, pred) {
//     for(let i = array.length-1; i >=0; i--) {
//         if ( pred(array[i]) ) {
//             array.splice(i, 1);
//         }
//     }
//     return array;
// }
// console.log(deleteValues([1,3,2,4,5,7,6,8,10,9],isEven))


// function largest(n, array) {
//     return array.sort((a, b) => a-b).slice(-n)
// }
//
// console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
//
//
//
// function removeSmallest(numbers) {
//     // return numbers.sort((a,b)=>a-b).filter((item, index) => numbers.indexOf(item) === index).slice(1)
//     const minIndex = numbers.indexOf(Math.min(...numbers));
//     const result = numbers.slice(0, minIndex).concat(numbers.slice(minIndex + 1));
//     return result
// }
// console.log(removeSmallest([5, 3, 2, 1, 4]))

// function distancesFromAverage(arr){
//     let avg = arr.reduce((acc,item)=>acc+item,0)/arr.length
//     return arr.map(item=>parseFloat((avg-item).toFixed(2)))
// }
// console.log(distancesFromAverage([1, -1, 1, -1, 1, -1]))



// function removeSmallest(numbers) {
//     const minIndex = numbers.indexOf(Math.min(...numbers));
//     const result = numbers.slice(0, minIndex)
//         result.push(...numbers.slice(minIndex + 1));
//     return result
// }
// console.log(removeSmallest([1, 2, 3, 4, 5]))


// function sortByLength (array) {
//     return array.sort((a,b)=>a.length-b.length);
// }


// function convertHashToArray(hash){
//     console.log(Object.entries(hash))
//     return Object.entries(hash).sort((a,b)=>a[0].localeCompare(b[0]))
// }
// console.log(convertHashToArray({name: "Jeremy", age: 24}))

// function every(arr, interval=1, start=0){
//     const array = []
//     for (let i = start;i<arr.length;i+=interval){
//             array.push(arr[i])
//     }
//     return array
// }
//
// console.log(every([0,1,2,3,4],3))

// let arr = ['mango','banana','apple',10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// for (let i = 0;i<arr.length;i++){
//     if (i%3===0){
//         console.log(arr[i])
//     }
// }

function compoundArray(a, b) {
    const newArr = []
    const arrLenght = a.length>b.length?a.length:b.length
    for (let i =0;i<arrLenght;i++){
        if (a[i]!==undefined){
            newArr.push(a[i])
        }
        if (b[i]!==undefined){
            newArr.push(b[i])
        }
    }
    return newArr
    // return newArr.filter(item=>item!==undefined)
}
console.log(compoundArray([11, 12], [21, 22, 23, 24]))