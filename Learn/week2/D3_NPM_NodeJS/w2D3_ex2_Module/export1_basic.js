// 모듈 직접 작성하여 export

const name = 'horiz.d';
const age = 5;

const nationality = 'korea';

class developer {
    constructor(name, stack) {
        this.name = name;
        this.stack = stack;
    }
    
    getName() {
        return this.name
    }

    getStack() {
        return this.stack
    }

}

exports.nationality = nationality

module.exports = {
    name,
    age,
    developer
}
