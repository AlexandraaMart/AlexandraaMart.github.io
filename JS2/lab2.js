function pow(a, b) {    // функция, возводящая а в степень b 
    return a**b;
}

function sumTo(n) { //вычисляет сумму чисел от 1 до n включительно
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function factorial(n) { //возвращает факториал числа n!
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function fib(n) { //возвращает n-е число Фибоначчи
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}


function compare(x) { 
    return function compare(y) {
        if (y>x) true;
        else if (y<x) false;
        else null;
    }
}

function sum() { // возвращает сумму всех своих аргументов
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}
