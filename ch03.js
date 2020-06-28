// Minimum
const min = (a, b) => a < b ? a : b;

console.log("Minimum");
console.log("---------------");
console.log(min(0, 10));// → 0
console.log(min(0, -10));// → -10

console.log();
console.log();


// Recursion
const isEven = (num) => {
    if (num < 0) {
        num = -num;
    }

    if (num == 0) return true;
    if (num == 1) return false;

    return isEven(num -2);
};

console.log("Recursion");
console.log("---------------");
console.log(isEven(50));// → true
console.log(isEven(75));// → false
console.log(isEven(-50));// → true
console.log(isEven(-75));// → false

console.log();
console.log();


// Bean counting
const countBs = (str) => {
    return countChar(str, "B");
};

const countChar = (str, char) => {
    let countChar = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            countChar++;
        }
    }

    return countChar;
};

console.log("Bean counting");
console.log("---------------");
console.log(countBs("BBC"));// → 2
console.log(countChar("kakkerlak", "k"));// → 4