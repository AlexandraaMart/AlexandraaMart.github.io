"use strict"
let obj = {
    className: 'open menu'
}

obj.addClass = function addClass(cls) {
    let arr = this.className.split(" ");
    if (!arr.includes(cls)) {
        arr.push(cls)
    }
    this.className = arr.join(" ");// присваеваем свойству объекта, новый список классов.
}

obj.addClass('new'); // open menu new
obj.addClass('hi'); // open menu new hi
obj.addClass('osdd');  // без изменений 

console.log(obj.className);

obj.removeClass = function removeClass(cls) {
    let arr = this.className.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            arr.splice(i, 1);
            i--;
        }
    }
    obj.className = arr.join(' ');
}

obj.removeClass('osdd'); // open menu hi
obj.removeClass('ho'); // open menu hi
obj.removeClass('open'); // menu hi

console.log(obj.className);
