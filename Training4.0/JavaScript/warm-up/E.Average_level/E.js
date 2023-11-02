const fs = require("fs");
const [str1, str2] = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .trim()
  .split("\n");

let ratings = str2.split(" ").map(Number);
// function getAverageLevels(ratings) {
//   const res = [];

//   for (let i = 0; i < ratings.length; i++) {
//     let aver = 0;
//     for (let j = 0; j < ratings.length; j++) {
//       aver += Math.abs(ratings[j] - ratings[i]);
//     }
//     res.push(aver);
//   }

//   return res.join(" ");
// }

function getAverageLevels(ratings) {
  const prefixSum = new Array(ratings.length).fill(0);
  prefixSum[0] = ratings[0];
  for (let i = 1; i < ratings.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + ratings[i];
  }

  const levels = new Array(ratings.length).fill(0);
  for (let i = 0; i < ratings.length; i++) {
    levels[i] =
      Math.abs(prefixSum[i] - (i + 1) * ratings[i]) +
      Math.abs(
        ratings[i] * (ratings.length - i - 1) -
          (prefixSum[prefixSum.length - 1] - prefixSum[i])
      );
  }

  return levels.join(" ");
}
console.log(getAverageLevels(ratings));
