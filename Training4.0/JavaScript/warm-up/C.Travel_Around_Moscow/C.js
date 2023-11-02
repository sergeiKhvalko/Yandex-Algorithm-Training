const fs = require("fs");
const [ax, ay, bx, by] = fs
  .readFileSync("input.txt", "utf-8")
  .trim()
  .split(" ")
  .map(Number);

function travelAroundMoscow(ax, ay, bx, by) {
  let r1 = Math.sqrt(ax * ax + ay * ay);
  let r2 = Math.sqrt(bx * bx + by * by);
  if (r1 * r2 === 0) return r1 + r2;

  let alpha1 = ax !== 0 ? Math.atan(Math.abs(ay / ax)) : Math.PI / 2;
  let alpha2 = bx !== 0 ? Math.atan(Math.abs(by / bx)) : Math.PI / 2;

  if (ax < 0) alpha1 = Math.PI - alpha1;
  if (ay < 0) alpha1 *= -1;
  if (bx < 0) alpha2 = Math.PI - alpha2;
  if (by < 0) alpha2 *= -1;

  let alpha = Math.abs(alpha1 - alpha2);
  let path1 = r1 + r2;
  let path2 = Math.min(r1, r2) * alpha + Math.abs(r1 - r2);
  return Math.min(path1, path2);
}

console.log(travelAroundMoscow(ax, ay, bx, by));
