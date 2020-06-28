// A Vector type
class Vec {

    #length

    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.#length = Math.abs(Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
    }

    plus(vector) {
        return new Vec(this.x + vector.x, this.y + vector.y);
    }

    minus(vector) {
        return new Vec(this.x - vector.x, this.y - vector.y);
    }

    get length() {
        return this.#length;
    }
}

console.log("A Vector type");
console.log("---------------");
console.log(new Vec(1, 2).plus(new Vec(2, 3)));// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);// → 5

console.log();
console.log();


// Groups
class Group {
    #data = [];
    
    constructor() {
        this.#data = [];
    }
    
    add(value) {
        if (this.#data.find(el => el === value) === undefined)  {
            this.#data.push(value);
        }
    }
    
    delete(value) {
        const index = this.#data.findIndex(el => el === value);
        if (index !== -1) {
            this.#data = this.#data.slice(0, index).concat(this.#data.slice(index + 1));
        }
    }

    has(value) {
        return this.#data.find(el => el === value) !== undefined;
    }

    get length() {
        return this.#data.length;
    }

    get(index) {
        if (index >= 0 && index < this.length) {
            return this.#data[index];
        }
    }

    static from(iterable) {
        const group = new Group();
        for (let item of iterable) {
            group.add(item);
        }

        return group;
    }
}

console.log("Groups");
console.log("---------------");
let group = Group.from([10, 20]);
group.add(10);
console.log(group.length)// → 2
console.log(group.has(10));// → true
console.log(group.has(30));// → false
group.add(10);
group.delete(10);
console.log(group.has(10));// → false

console.log();
console.log();


// Iterable groups
class GroupIterator {
    #group
    #index
    
    constructor(group) {
        this.#group = group;
        this.#index = 0;
    }
    
    next() {
        if (this.#index === this.#group.length) {
            return {done: true};
        }

        return {
            value: this.#group.get(this.#index++),
            done: false
        };
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}

Symbol.iterator

console.log("Iterable groups");
console.log("---------------");
for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c

console.log();
console.log();


// Borrowing a method
let map = {one: 1, two: 2, hasOwnProperty: false};

console.log("Borrowing a method");
console.log("---------------");
// Fix this call
// console.log(map.hasOwnProperty("one"));// → true
console.log(Object.hasOwnProperty.call(map, "one"));