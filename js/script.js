'use strict'
// Знайти суму всіх цілих чисел від 1 до 15
let sum1 = 0;

for (let i = 1; i <= 15; i++) {
    sum1 += i;
}

console.log(sum1);
// Знайти добуток усіх цілих чисел від 15 до 35
let sum2 = 1;

for (let i = 15; i <= 35; i++) {
    sum2 *= i;
}

console.log(sum2);
// Знайти середнє арифметичне всіх цілих чисел від 1 до 500
let sum3 = 0;
let avg;

for (let i = 1; i <= 500; i++) {
    sum3 += i;
    avg = sum3 / 500;
}

console.log(avg);
// Вивести суму лише парних чисел у діапазоні від 30 до 80

let sum4 = 0;
for (let i = 30; i <= 80; i++) {
    if(i % 2 === 0){
        sum4 += i;
    }
}
console.log(sum4)

// Вивести на консоль таблицю Піфагора з використанням циклів.
for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
        row += `${i * j}\t`;
    }
    console.log(row);
}
