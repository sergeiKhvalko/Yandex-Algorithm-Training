const fs = require("fs");
let [n, array] = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .trim()
  .split("\n");

if (Number(n)) {
  array = array.split(" ").map(Number);
} else array = [];

function merge(secuence, support, ls, le, rs, re) {
  for (let i = ls; i <= re; i++) {
    support[i] = secuence[i];
  }

  let l = ls;
  let r = rs;

  for (let i = ls; i <= re; i++) {
    if (l > le) {
      secuence[i] = support[r++];
    } else if (r > re) {
      secuence[i] = support[l++];
    } else if (support[l] < support[r]) {
      secuence[i] = support[l++];
    } else {
      secuence[i] = support[r++];
    }
  }
}
function mergeSortRecursive(secuence, support, startIndex, endIndex) {
  if (startIndex >= endIndex) return;
  const pivot = Math.floor(startIndex + (endIndex - startIndex) / 2);
  mergeSortRecursive(secuence, support, startIndex, pivot);
  mergeSortRecursive(secuence, support, pivot + 1, endIndex);
  merge(secuence, support, startIndex, pivot, pivot + 1, endIndex);
}

function mergeSort(secuence) {
  const support = new Array(secuence.length);
  const startIndex = 0;
  const endIndex = support.length - 1;
  mergeSortRecursive(secuence, support, startIndex, endIndex);
}

mergeSort(array);
console.log(array.join(" "));
