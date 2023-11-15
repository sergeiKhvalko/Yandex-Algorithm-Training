const fs = require("fs");
const [line1, line2, line3] = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .trim()
  .split("\n");

const n = Number(line1);
const secuence = line2.trim().split(" ").map(Number);
const support = Number(line3);

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
function partition(support, secuence, start, end) {
  let i = start;
  for (let j = start; j < end; j++) {
    if (secuence[j] < support) {
      swap(secuence, i++, j);
    }
  }
  swap(secuence, i, end - 1);
  return [i, end - i];
}

const [p1, p2] = partition(support, secuence, 0, n);
console.log(p1);
console.log(p2);
