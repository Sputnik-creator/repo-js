// С помощью рекурсии организовать функцию возведения числа в степень. 
//Формат: function power(val, pow), где val – заданное число, pow – степень

'use strict'

function power(val, pow) {
    if(pow = 0) return 1;
    else if(pow = 1) return val;
    else {
        pow--;
        val *= val;
        return power(val, pow);
    }
}

console.log(power(7,4))