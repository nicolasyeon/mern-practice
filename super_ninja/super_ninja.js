class Ninja {
    constructor(name, health, strength = 3, speed = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`Hello my name is ${this.name} and I am a ninja!`);
        return this;
    }
    showStats() {
        console.log(
            `Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}`
        );
        return this;
    }
    drinkSake() {
        this.health += 10;
        console.log(`Drank sake and now I gained 10 health`)
        return this;
    }
}
class Sensei extends Ninja {
    constructor(name, health = 200, strength = 10, speed = 10, wisdom = 10) {
        super(name, health, strength, speed);
        this.wisdom = wisdom
    }
    speakWisdom() {
        console.log(
            `What one programmer can do in a month, two programmers can do in two months.`
        );
        return this;
    }
}

const nick = new Sensei("Nick");
nick.showStats();
nick.drinkSake();
nick.speakWisdom();
nick.showStats();
nick.sayName();
