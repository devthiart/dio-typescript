"use strict";
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attach with ${this.strength} points`);
    }
    incrementSkill(increment) {
        this.skill += increment;
    }
}
const c1 = new Character('Bulbasaur', 10, 98);
console.log(c1);
class Magician extends Character {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}
const c2 = new Magician('Mage', 5, 30, 100);
console.log(c2);
