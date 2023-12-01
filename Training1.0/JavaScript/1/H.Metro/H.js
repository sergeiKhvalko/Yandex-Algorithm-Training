const fs = require("fs");
const [a, b, n, m] = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .trim()
  .split("\n");

function getDetails(a, b, n, m) {
  console.log(a, n);
  let minA = a * (n - 1) + n; // 5
  let maxA = a * (n + 1) + n; // 7

  let minB = b * (m - 1) + m; // 5
  let maxB = b * (m + 1) + m; // 11
  console.log(minA, maxA, minB, maxB);
  let aNotOk = minA > maxB || minB > maxA;
  let bNotOk = minB > maxA || minA > maxB;
  if (aNotOk || bNotOk) return console.log(-1);
  console.log(Math.max(minA, minB), Math.min(maxA, maxB));
}

getDetails(+a, +b, +n, +m);
// 1 3 3 2
