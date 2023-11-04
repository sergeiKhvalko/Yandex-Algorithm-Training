const fs = require("fs");
const [t, ...rest] = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .trim()
  .split("\n");

const matrix = rest.map((str) => str.trim().split(" ").map(Number));

function canFormGroup(n, a, b) {
  let groupCount = Math.floor(n / a);
  let rest = n % a;

  if (rest % groupCount === 0) {
    if (Math.floor(rest / groupCount) <= b - a) return "YES";
    else return "NO";
  } else {
    if (Math.floor(rest / groupCount) + 1 <= b - a) return "YES";
    else return "NO";
  }
}

for (const [n, a, b] of matrix) {
  console.log(canFormGroup(n, a, b));
}
