"use strict";
const bot1 = {
    id: 1,
    name: 'Bot011',
};
bot1.name = 'Bot01';
console.log(bot1);
class Android {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello! My name is ${this.name}!`;
    }
}
const android = new Android(3, 'Android 01');
console.log(android.sayHello());
const bot2 = {
    id: 2,
    name: 'Bot02',
    sayHello: () => { return 'Hello!'; }
};
console.log(bot2);
