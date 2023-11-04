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


function getName(name,callback){
  callback(name)
}


getName('mango',function showName(name){
  console.log(name)
})


//5 задач з код варс
// стрілочні функції
// пере бираючі методи масивів forEach() map() filter() приклади використання
// що повертає які параметри оголошує колбек функція для чого використовуєтсья
const numbers = [1,2,3,4,5]