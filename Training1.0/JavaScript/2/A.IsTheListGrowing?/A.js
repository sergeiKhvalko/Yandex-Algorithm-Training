const fs = require("fs");
const list = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .split(" ")
  .map(Number);

function isGrowing(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) return "NO";
  }
  return "YES";
}

console.log(isGrowing(list));
