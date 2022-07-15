const duck = {
    name: "duck",
    sound: "quack",
};

const { name: name1, sound: sound1 } = duck;

console.log("name", name1);
console.log("sound", sound1);


const animals = ["duck", "cat", "bear"];

const [first, second, third] = animals;

console.log("first", first);
console.log("second", second);
console.log("third", third);