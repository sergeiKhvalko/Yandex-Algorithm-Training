const fs = require("fs");
const [n, k, m] = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .trim()
  .split(" ");

function getDetails(n, k, m) {
  if (m > k) return 0;
  let details = 0;
  while (n >= k) {
    console.log(n);
    n -= k;
    details += Math.floor(k / m);
    n += k % m;
  }
  return details;
}

console.log(getDetails(+n, +k, +m));
