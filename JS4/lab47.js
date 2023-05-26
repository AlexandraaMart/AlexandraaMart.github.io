'use strict'
function formatDate(date) {

    let day = date.getDate();
    if (day < 10) day = '0' + day;

    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;

    let year = date.getFullYear()%100;
    if (year < 10) year = '0' + year;

    return day + '.' + month + '.' + year;
}

let d = new Date(2014, 0, 30); // 30 янвваря 2014
console.log(formatDate(d))

let p = new Date(2017, 8, 12); // 12  августа 2017
console.log(formatDate(p))

let now = new Date();
let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
console.log(`Сегодня ${formatDate(today)}`)