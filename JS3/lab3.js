export function getDecimal(num) {
    if (Math.trunc(num) == num) {
        return 0;
    }
    else if (num < 0) {
        return num - (-Math.ceil(-num));
    }
    if (num > 1) {
        return +(num - Math.trunc(num)).toFixed(2);
    }
}



export function ucFirst(str) {
    if (!str) {
        return str;
    }
    else {
        let NewStr = str[0].toUpperCase() + str.slice(1);
        return NewStr;
    }
}



export function checkSpam(str) {
    let NewStr = str.toLowerCase();
    return NewStr.includes('viagra') || NewStr.includes('xxx');
}



export function truncate(str, maxlength) {
    if (str.length < maxlength) {
        return str;
    }
    else {
        return str.slice(0, maxlength - 1) + '…';
    }
}



export function camelize(str) {
    let STR = str.split("-");
    let StrNew = "";
    for (let i = 0; i <= STR.length - 1; i++) {
        if (i == 0) {
            StrNew = STR[0];
        }
        else StrNew += ucFirst(STR[i]);
    }
    return StrNew;
}

export function fib(n) {
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

export function fibs(n){
    let arr = [];
    for (let i = 0; i<n; i++){
        arr.push(fib(i));
    }
    return arr;
}