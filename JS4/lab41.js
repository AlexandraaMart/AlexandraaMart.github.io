"use strict"
var obj = {
    className: 'open menu'
}

obj.addClass = function addClass(cls) {
    let subObj = {};
    let arr = this.className.split(" ");
    // заносим элементы в объект.
    for (let i = 0; i < arr.length; i++) {
        subObj[arr[i]] = true;
    }
    // если класа нет то свойство добавится.
    subObj[cls] = true;
    // получаем из свойств объекта, массив.
    arr = Object.keys(subObj);
    // присваеваем свойству объекта, новый список классов.
    this.className = arr.join(" ");
}

obj.addClass('new'); // obj.className='open menu new'
obj.addClass('open');  // без изменений (класс уже существует)
obj.addClass('me'); // obj.className='open menu new me'

console.log(obj.className);
