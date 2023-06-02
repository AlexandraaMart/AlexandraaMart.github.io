'use strict'
        let vasya = { name: "Вася", age: 23 };
        let masha = { name: "Маша", age: 18 };
        let vova = { name: "Вова", age: 12 };
        let people = [vasya, masha, vova];

        function sorted(a, b) {
            return a.age - b.age;
        }
        people.sort(sorted);

        for (let i in people) console.log(people[i]);