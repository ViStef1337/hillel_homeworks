'use strict'
// Знайти суму всіх цілих чисел від 1 до 15
let sum = 0;

for (let i = 1; i <= 15; i++) {
    sum += i;
}

console.log(sum);
// Знайти добуток усіх цілих чисел від 15 до 35
let sum = 1;

for (let i = 15; i <= 35; i++) {
    sum *= i;
}

console.log(sum);
// Знайти середнє арифметичне всіх цілих чисел від 1 до 500
let sum = 0
let avg

for (let i = 1; i <= 500; i++) {
    sum += i;
    avg = sum / 500
}

console.log(avg);
// Вивести суму лише парних чисел у діапазоні від 30 до 80

let sum = 0
for (let i = 30; i <= 80; i++) {
    if(i % 2 === 0){
        sum += i
    }
}
console.log(sum)

// Вивести на консоль таблицю Піфагора з використанням циклів.
for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
        row += `${i * j}\t`;
    }
    console.log(row);
}
