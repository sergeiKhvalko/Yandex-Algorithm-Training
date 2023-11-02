const fs = require("fs");
const [a, b, c, d] = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .trim()
  .split(" ")
  .map(Number);

let m = a * d + b * c;
let n = b * d;
let div = 2;
while (div <= m && div <= n) {
  if (m % div === 0 && n % div === 0) {
    m /= div;
    n /= div;
    continue;
  }
  div += 1;
}
console.log(`${m} ${n}`);
