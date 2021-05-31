// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

'use strict'

let a = 1;
console.log(2);
while (a < 100) {
    let j = 2;
    while (j < a) {
        if (a % j == 0) break;
        j++;
        if (j > a / 2) {
            console.log(a);
            break;
        }
    }
    a++;
}