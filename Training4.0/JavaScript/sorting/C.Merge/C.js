const fs = require("fs");
let [n, arr1, m, arr2] = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .trim()
  .split("\n");

if (Number(n)) {
  arr1 = arr1.split(" ").map(Number);
} else arr1 = [];

if (Number(m)) {
  arr2 = arr2.split(" ").map(Number);
} else arr2 = [];

function merge(secuence1, secuence2) {
  const res = new Array(secuence1.length + secuence2.length).fill(0);
  let l = 0;
  let r = 0;

  for (let i = 0; i < res.length; i++) {
    if (l >= secuence1.length) {
      res[i] = secuence2[r];
      r++;
    } else if (r >= secuence2.length) {
      res[i] = secuence1[l];
      l++;
    } else if (secuence1[l] < secuence2[r]) {
      res[i] = secuence1[l];
      l++;
    } else {
      res[i] = secuence2[r];
      r++;
    }
  }

  return res;
}

console.log(merge(arr1, arr2).join(" "));
