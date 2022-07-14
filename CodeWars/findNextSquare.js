function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let sqrt = Math.sqrt(parseInt(sq));
  let result = Math.pow(sqrt + 1, 2);
  return sqrt % 1 === 0 ? result : -1;
}

console.log(findNextSquare(121));
