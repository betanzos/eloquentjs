// The sum of a range
const range = (start, end, step = 1) => {
    let reverseNeeded = false;
    if (step < 0) {
        let temp  = start;
        start = end;
        end = temp;
        reverseNeeded = true;
        step = Math.abs(step);
    }

    const arr = [start];

    while ((start += step) <= end) {
        arr.push(start);
    }

    return reverseNeeded ? arr.reverse() : arr;
};

const sum = (arr) => {
    let result = 0;
    for (let item of arr) {
        result += item;
    }

    return result;
}

console.log("The sum of a range");
console.log("---------------");
console.log(range(1, 10));// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));// → 55

console.log();
console.log();


// Reversing an array
const reverseArray = (arr) => {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }

    return reversed;
}

const reverseArrayInPlace = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    let temp = -1;
    
    while (left < right) {
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

console.log("Reversing an array");
console.log("---------------");
console.log(reverseArray(["A", "B", "C"]));// → ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);// → [5, 4, 3, 2, 1]

console.log();
console.log();


// A List
const arrayToList = (arr) => {
    let list = null;
    let last = null;

    for (let item of arr) {
        let element = {
            value: item,
            rest: null
        }

        if (list == null) {
            list = element;
            last = list;
        } else {
            last.rest = element;
            last = element;
        }
    }

    return list;
}

const listToArray = (list) => {
    const arr = [];

    if (list == null) return [];

    let next = list;
    while (next != null) {
        arr.push(next.value);
        next = next.rest;
    }

    return arr;
}

const prepend = (element, list) => {
    let newList = {
        value: element,
        rest: list
    }

    return newList;
}

const nth = (list, index) => {
    let found = undefined;

    if (list != null) {
        let next = list;
        let i = 0;
        for (; i < index && next.rest != null; i++) {
            next = next.rest;
        }

        if (i === index) {
            found = next.value;
        }
    }

    return found;
}

const nthRecursice = (list, start, index) => {
    if (list == null) {
        return undefined;
    }

    if (start === index) {
        return list.value;
    }

    return nthRecursice(list.rest, start + 1, index);
}

console.log("A List");
console.log("---------------");
console.log(arrayToList([10, 20]));// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));// → 20
console.log(nthRecursice(arrayToList([10, 20, 30]), 0, 1));// → 20

console.log();
console.log();


// Deep comparison
const deepEqual = (obj1, obj2) => {
    if (obj1 === obj2) return true;
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for (let attrName in obj1) {
        let attrValue1 = obj1[attrName];
        let attrValue2 = obj2[attrName];
        let typeAttrValue1 = typeof attrValue1;
        let typeAttrValue2 = typeof attrValue2;

        if (typeAttrValue1 !== typeAttrValue2) {
            return false;
        } else if (typeAttrValue1 === "object") {
            if (!deepEqual(attrValue1, attrValue2)) {
                return false;
            }
        } else if (typeAttrValue1 !== "function" && attrValue1 !== attrValue2) {
            return false;
        }
    }

    return true;
}

console.log("Deep comparison");
console.log("---------------");
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));// → true
console.log(deepEqual(obj, {here: 1, object: 2}));// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));// → true