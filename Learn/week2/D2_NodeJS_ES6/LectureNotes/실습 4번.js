class Animal {
    constructor(name, sound) {
        /* constructor 완성하기 */
        this.name = name;
        this.sound = sound;
    }

    explain() {
        return `${this.name} says ${this.sound}`;
    }
}

// "duck", "quack"
const duck = new Animal("duck","quack");

module.exports = duck;