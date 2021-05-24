// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
// В зависимости от переданного значения операции выполнить одну из арифметических операций 
// (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

'use strict'

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case sum:
            console.log(sum(arg1, arg2));
            break
        case difference:
            console.log(difference(arg1, arg2));
            break
        case multiplication:
            console.log(multiplication(arg1, arg2));
            break
        case division:
            console.log(division(arg1, arg2));
    }
}
function sum(a, b) {
    return(a +b)
};

function difference(a, b) {
    return(a - b)
};

function multiplication(a, b) {
    return(a * b)
};

function division(a, b) {
    return(a / b)
};

mathOperation(8, 13, multiplication);