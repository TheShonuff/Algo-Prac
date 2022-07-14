function descendingOrder(n) {
  let myFunction = (num) => Number(num);
  arr = Array.from(String(n), myFunction);
  arr.sort((a, b) => (a > b ? -1 : 1));
  const result = arr.join("");
  return parseInt(result, 10);
}

testNumer = 42145;
descendingOrder(testNumer);
