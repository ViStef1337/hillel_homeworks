'use strict'

export function getRandomColor() {
    // Генеруємо три випадкові значення для кожного кольору (червоний, зелений, синій)
    let r = Math.floor(Math.random() * 256); // від 0 до 255
    let g = Math.floor(Math.random() * 256); // від 0 до 255
    let b = Math.floor(Math.random() * 256); // від 0 до 255

    // Конвертуємо числа у шістнадцятковий формат та об'єднуємо їх у одну строку
    let hexColor = '#' + r.toString(16) + g.toString(16) + b.toString(16);

    return hexColor;
}