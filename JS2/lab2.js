function pow(a, b) {    // функция, возводящая а в степень b 
    return a ** b;
}

function sumTo(n) { //вычисляет сумму чисел от 1 до n включительно
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
function factorial(n) { //возвращает факториал числа n!
    let a = BigInt(1);
    if (n == 0n || n == 1n) return 1n;
    else{
        a = n * factorial(n - 1n);
        return ;
    }
}


function fib(n) { //возвращает n-е число Фибоначчи
    let a = 1n;
    let b = 1n;
    if (n == 0n) {
        return 0n;
    }
    else {
        for (let i = 3n; i <= n; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}

function compare(x) {
    return function (y) {
        if (y > x) return true;
        else if (y < x) return false;
        else if (y == x) return null;
    }
}

function sum() { // возвращает сумму всех своих аргументов
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}
