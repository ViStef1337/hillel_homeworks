'use strict'
//Створити невелику гру:)
// - Спочатку на екрані користувача відображатиметься
//якась форма (коло, квадрат, прямокутник)
// - При натисканні на неї в рандомному порядку форма повинна
//змінюватися на іншу
// - Форма щоразу повинна з'являтися у різних місцях на сторінці
// - Колір форми в рандомному порядку змінюється,

const forms = [
  'width: 100px; height: 100px; border-width: 1px; border-color: #000000',
  'width: 100px; height: 100px; border-radius: 50%; border-width: 1px; border-color: #000000',
  'width: 150px; height: 100px; border-width: 1px; border-color: #000000',
  'width: 200px; height: 100px; border-radius: 100px / 50px;',
  'width: 150px; height: 100px; transform: skew(20deg);',
];
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const randomither = max => {
  return Math.floor(Math.random() * max);
};
const index = randomither(5)

const box = document.createElement('div')
box.style.cssText = forms[index]
box.style.background=getRandomHexColor()
document.body.append(box)

box.addEventListener('click',()=> {
  box.style.cssText = forms[randomither(5)]
  console.log(randomither(5))
  box.style.background=getRandomHexColor()
  box.style.position='absolute'
  box.style.top=`${randomither(90)}%`
  box.style.left=`${randomither(90)}%`
})

//створит input в html ы button
//в input будемо вводити число пысля того як ввели число клыкаэмо на кнопку ы потрыбно створити таку кылькысть квадратыв перший квадрат розмыром 30на30px коден наступний на 10px быльший ы в кожного рандомний колыр
//маэ бути кнопка очистити при натисканны на неъ видаляться всы квадрати