const fs = require("fs");
let [line1, ...rest] = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .trim()
  .split("\n");

let [n, m] = line1.trim().split(" ").map(Number);
const matrix = rest.map((str) => str.trim().split(" ").map(Number));

function getCarrots(n, m, matrix) {
  const dp = new Array(n).fill().map(() => new Array(m).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j]) {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
        }
      }
    }
  }

  let max_carrots = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      max_carrots = Math.max(max_carrots, dp[i][j]);
    }
  }

  return max_carrots;
}

console.log(getCarrots(n, m, matrix));
