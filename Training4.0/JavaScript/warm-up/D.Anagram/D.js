const fs = require("fs");
const [str1, str2] = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .trim()
  .split("\n");

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return "NO";
  const hash = {};
  for (let i = 0; i < str1.length; i++) {
    if (!hash[str1[i]]) hash[str1[i]] = 0;
    hash[str1[i]] += 1;

    if (!hash[str2[i]]) hash[str2[i]] = 0;
    hash[str2[i]] -= 1;
  }

  for (let key in hash) {
    if (hash.hasOwnProperty(key)) {
      if (hash[key] !== 0) return "NO";
    }
  }

  return "YES";
}

console.log(isAnagram(str1, str2));
