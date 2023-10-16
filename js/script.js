'use strict'
function createSumFunction() {
    let total = 0;

    function sum(num) {
        total += num;
        return total;
    }

    return sum;
}

const sum = createSumFunction();

console.log(sum(4));  // 4
console.log(sum(6));  // 10
console.log(sum(10)); // 20
console.log(sum(7));  // 27




function multiplication (x){
    return function (y){
        return x * y;
    }
}


console.log(multiplication(2)(5));

function cycle(){
    for(let i = 0; i<10 ;i++){
        let num = prompt(`ваше число , ${i+1}`)
        if (num > 100){
            console.log('Користувач ввів число більше 100:', num);
            return;
        }else {
            alert('введіть число ще раз')
        }
    }
    console.log('досягнуто максимальну кількість ітерацій.');
}
cycle()



