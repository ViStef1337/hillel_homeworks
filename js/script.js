'use strict'
//     alert("Tell me your name");
//     let name = prompt("Your name");
//     alert(`Hi ${name}`);
function userInfo (){
    let birthYear = Number(prompt('year of birth'))
    let city = prompt('where do you live? ')
    let sport = prompt('what is your favorite sport? ')
    birthYear = 2023 - birthYear;
    if (!birthYear) {
        alert("it is sad you didnt want to note your info about your birth date.");
        return;
    } else if (!city) {
        alert("it is sad you didnt want to note your info about your city.");
        return;
    } else if (!sport) {
        alert("it is sad you didnt want to note your info about your sport.");
        return;
    }
    if  (city == "Kiev") {
        alert('you live in the capital of Ukraine')
    }else if (city == "Washington") {
        alert('you live in the capital of US')
    }else if (city == "London") {
        alert('you live in the capital of UK')
    }else {
        alert(`you live in ${city}`)
    }
    alert(`${birthYear},${city},${sport}`);
}
userInfo();