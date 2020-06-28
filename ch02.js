// Print a triangle
const charToPrint = "#";

console.log("Print a triangle");
console.log("---------------");
for (let i = 0; i < 8; i++) {
    console.log(charToPrint.repeat(i));
}

console.log();
console.log();


// FizzBuzz
console.log("FizzBuzz");
console.log("---------------");
for (let i = 1; i <= 100; i++) {
    let divisibleBy3 = i % 3 == 0;
    let divisibleBy5 = i % 5 == 0;

    if (divisibleBy3 && divisibleBy5) {
        console.log(`${i} - FizzBuzz`);
        continue;
    }

    if (divisibleBy3) {
        console.log(`${i} - Fizz`);
        continue;
    }

    if (divisibleBy5) {
        console.log(`${i} - Buzz`);
    }
}

console.log();
console.log();


// Chessboard
const boardSize = 10;
let board = "";
let startingLineWithSpace = true;
for (let i = 0; i < boardSize * boardSize; i++) {
    if (i > 0 && i % boardSize == 0) {
        board = board.concat("\n");
        startingLineWithSpace = !startingLineWithSpace;
    }

    if (i % 2 == 0) {
        board = board.concat(startingLineWithSpace ? " " : "#");
    } else {
        board = board.concat(startingLineWithSpace ? "#" : " ");
    }
}

console.log("Chessboard");
console.log("---------------");
console.log(board);