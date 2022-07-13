//직접 작성한 모듈 import

const elice = require("./export1_basic");

console.log(elice);

const dev_horizD = new elice.developer("horiz.D", "ts");

console.log(dev_horizD.getName());
console.log(dev_horizD.getStack());
