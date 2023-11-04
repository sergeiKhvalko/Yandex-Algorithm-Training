const fs = require("fs");
const [a, b, n] = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .trim()
  .split("\n")
  .map(Number);

function isMoreStudents(a, b, n) {
  const bStudents = Math.floor(b / n) + Number(b % n > 0);
  if (a > bStudents) return "YES";
  return "NO";
}

console.log(isMoreStudents(a, b, n));
