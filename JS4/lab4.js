"use strict";

function isEmpty(obj) {
    return obj.hasOwnProperty()
}
let book1 = new Object(); // синтаксис "конструктор объекта"
book1 = {
    title: "Гордость и предубеждение",
    pubYear: 1796,
    price: 360,
    show: function () {
        console.log(this.title);
        console.log(this.price);
    }
};  // синтаксис "литерал объекта"

console.log(isEmpty(book1));

let book2 = new Object();
book2.title = 'Обрыв';
book2.pubYear = 1888;
book2.price = 1000;

for (let i in book2) console.log(book2[i]);
console.log(isEmpty(book2));

book1.show();

book2.show = function showBook() {
    console.log(this.title);
    console.log(this.price);
}

book2.show();