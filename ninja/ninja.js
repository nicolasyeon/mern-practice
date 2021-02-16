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
const ninja1 = new Ninja("Hyabusa", 50);
ninja1.sayName();
ninja1.showStats();
