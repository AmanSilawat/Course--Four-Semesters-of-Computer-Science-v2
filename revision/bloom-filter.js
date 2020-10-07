function h1(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        count += string.charCodeAt(i) * i + 5;
    }
    return count % 100;
}

function h2(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        count += string.charCodeAt(i) * i + 10;
    }
    return count % 100;
}

function h3(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        count += string.charCodeAt(i) * i + 15;
    }
    return count % 100;
}

class BloomFiltter {
    constructor() {
        this.array = new Array(100).fill(0);
    }
    add(string) {
        this.array[h1(string)] = 1;
        this.array[h2(string)] = 1;
        this.array[h3(string)] = 1;
    }
    check(string) {
        return !!(
            this.array[h1(string)] &&
            this.array[h2(string)] &&
            this.array[h3(string)]
        )
    }
}

const names = ['Brian', 'Simona', 'Sarah', 'Asim', 'John', 'Sean', 'Jessie', 'Paige'];

let bloom = new BloomFiltter();

names.forEach((item) => bloom.add(item));
names.forEach((item) => console.log( bloom.check(item)) ); // All result are true

console.log( bloom.check('Aman') ); // false


// StopWatch: 12mint
// Mistake: No Mistake