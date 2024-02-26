const fs = require("fs");
const [a, b, c] = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .trim()
  .split("\n");

function getTriangle(a, b, c) {
  if (a < b + c && b < a + c && c < a + b) return "YES";
  return "NO";
}

console.log(getTriangle(+a, +b, +c));
