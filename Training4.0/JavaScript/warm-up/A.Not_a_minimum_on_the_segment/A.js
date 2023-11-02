const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: fs.createReadStream(__dirname + "/input.txt"),
});

let curLine = 0;
let secuence;
rl.on("line", (line) => {
  if (curLine === 0) {
    curLine++;
  } else if (curLine === 1) {
    secuence = line.trim().split(" ").map(Number);
    curLine++;
  } else {
    const [left, right] = line.trim().split(" ").map(Number);
    let res = getNotMin(left, right);
    console.log(`${res}`);
  }
});

function getNotMin(left, right) {
  let min = secuence[left];
  for (let i = left; i <= right; i++) {
    if (secuence[i] < min) {
      return min;
    } else if (secuence[i] > min) {
      return secuence[i];
    }
  }
  return "NOT FOUND";
}
