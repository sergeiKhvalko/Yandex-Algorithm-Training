const fs = require("fs");
const [line1, mode] = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .split("\n");
const [troom, tcond] = line1.split(" ");

function conditioner(troom, tcond, mode) {
  switch (mode) {
    case "freeze":
      return Number(troom) < Number(tcond) ? troom : tcond;
    case "heat":
      return Number(troom) > Number(tcond) ? troom : tcond;
    case "auto":
      return tcond;
    default:
      return troom;
  }
}

console.log(conditioner(troom, tcond, mode));
