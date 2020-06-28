const SCRIPTS = require("./scripts");

// Flattening
const flat = (arr2D) => arr2D.reduce((a, b) => a.concat(b), []);

console.log("Flattening");
console.log("---------------");
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flat(arrays));// → [1, 2, 3, 4, 5, 6]

console.log();
console.log();


// Your own loop
const forLoop = (sentinel, predicate, updateSentinel, body) => {
    while (predicate(sentinel)) {
        body(sentinel);
        sentinel = updateSentinel(sentinel);
    }
};

console.log("Your own loop");
console.log("---------------");
forLoop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

console.log();
console.log();


// Everything
const every = (arr, predicate) => {
    for (let item of arr) {
        if (!predicate(item)) return false;
    }

    return true;
}

const everyWithSome = (arr, predicate) => !arr.some(e => !predicate(e));

console.log("Everything");
console.log("---------------");
console.log(every([1, 3, 5], n => n < 10));// → true
console.log(every([2, 4, 16], n => n < 10));// → false
console.log(every([], n => n < 10));// → true
console.log();
console.log(everyWithSome([1, 3, 5], n => n < 10));// → true
console.log(everyWithSome([2, 4, 16], n => n < 10));// → false
console.log(everyWithSome([], n => n < 10));// → true

console.log();
console.log();


// Dominant writing direction
const dominantDirection = (text) => {
    const result = {
        ltr: 0,
        rtl: 0,
        ttb: 0,
        none: 0
    };

    for (let char of text) {
        const charDir = getWritingDir(char.codePointAt(0));
        result[charDir] = result[charDir] + 1;
    }

    let dominantDir = "ltr";
    let max = result.ltr;
    
    if (result.rtl > max) {
        dominantDir = "rtl";
        max = result.rtl;
    }
    if (result.ttb > max) {
        dominantDir = "ttb";
    }

    return dominantDir;
};

const getWritingDir = (codePoint) => {
    const foundScript = SCRIPTS.find(script => {
        const foundRange = script.ranges.find(([left, right]) => {
            return left <= codePoint && codePoint < right;
        });

        return foundRange !== undefined;
    });

    return foundScript !== undefined ? foundScript.direction : "none";
}

console.log("Dominant writing direction");
console.log("---------------");
console.log(dominantDirection("Hello!"));// → ltr
console.log(dominantDirection("Hey, مساء الخير"));// → rtl
console.log(dominantDirection('ᠸᠢᠺᠢᠫᠧᠳᠢᠶᠠ᠂ᠴᠢᠯᠦᠭᠡᠲᠦ ᠨᠡᠪᠲᠡᠷᠬᠡᠢ ᠲᠣᠯᠢ ᠪᠢᠴᠢᠭ ᠪᠣᠯᠠᠢ英国的狗说"woof", 俄罗斯的狗说"тяв"'));// → ttb

console.log();
console.log();