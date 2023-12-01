const fs = require("fs");
const [a, b, c] = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .trim()
  .split("\n");

function EquationWithARoot(a, b, c) {
  if (c < 0) return "NO SOLUTION";
  else if (a + b === c ** 2 && 2 * a + b === c ** 2) {
    return "MANY SOLUTIONS";
  } else {
    if (a !== 0 && (c ** 2 - b) / a == Math.floor((c ** 2 - b) / a)) {
      return Math.floor((c ** 2 - b) / a);
    } else {
      return "NO SOLUTION";
    }
  }
}

console.log(EquationWithARoot(+a, +b, +c));
