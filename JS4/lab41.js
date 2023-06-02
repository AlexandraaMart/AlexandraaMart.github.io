"use strict"
let obj = {
    className: 'open menu',
    addClass: function(cls) {
        let arr = this.className.split(" ");
        if (!arr.includes(cls)) {
            arr.push(cls)
        }
        this.className = arr.join(" ");// присваеваем свойству объекта, новый список классов.
        return this;
    },

    removeClass: function(cls) {
        let arr = this.className.split(" ");
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == cls) {
                arr.splice(i, 1);
                i--;
            }
        }
        obj.className = arr.join(' ');
        return this;
    }
}


obj.addClass('new');
obj.addClass('open'); 

console.log(obj.className);

obj.removeClass('osdd');
obj.removeClass('new');

console.log(obj.className);
