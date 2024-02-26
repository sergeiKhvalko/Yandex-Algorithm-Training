const fs = require("fs");
const [a, b, c, d, e] = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .trim()
  .split("\n");

function canHeThrowBricks(a, b, c, d, e) {
  if (
    (a <= d && b <= e) ||
    (a <= d && c <= e) ||
    (b <= d && a <= e) ||
    (b <= d && c <= e) ||
    (c <= d && a <= e) ||
    (c <= d && b <= e)
  ) {
    return console.log("YES");
  }

  return console.log("NO");
}

canHeThrowBricks(+a, +b, +c, +d, +e);
