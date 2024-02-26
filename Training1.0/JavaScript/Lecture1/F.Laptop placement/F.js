const fs = require("fs");
const [w1, h1, w2, h2] = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .trim()
  .split(" ");

function getTableSize(w1, h1, w2, h2) {
  let var1 = (w1 + w2) * Math.max(h2, h1);
  let var2 = (h1 + h2) * Math.max(w1, w2);

  let var3 = (w1 + h2) * Math.max(w2, h1);
  let var4 = (h1 + w2) * Math.max(w1, h2);

  let min = Math.min(var1, var2, var3, var4);

  if (min === var1) return `${w1 + w2} ${Math.max(h2, h1)}`;
  else if (min === var2) return `${h1 + h2} ${Math.max(w1, w2)}`;
  else if (min === var3) return `${w1 + h2} ${Math.max(w2, h1)}`;
  else if (min === var4) return `${h1 + w2} ${Math.max(w1, h2)}`;
}
console.log(getTableSize(+w1, +h1, +w2, +h2));
