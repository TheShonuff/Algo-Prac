let symbol = "#";
// loop that makes 7 calls to console
for (let i = 0; i < 7; i++) {
  console.log(symbol);
  symbol += "#";
}

//FizzBuzz
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 !== 0) {
    console.log("Buzz");
  } else if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

// 8x8 chessboard
// 32 #
// 32 " "
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
