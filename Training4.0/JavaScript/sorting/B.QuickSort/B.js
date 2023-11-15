const fs = require("fs");
const [line1, line2] = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .trim()
  .split("\n");
const n = Number(line1);
let secuence;
if (n == 0) {
  secuence = [];
} else {
  secuence = line2.trim().split(" ").map(Number);
}

function insertionSort(secuence, start, end) {
  for (let i = start + 1; i <= end; i++) {
    const cur = secuence[i];
    let j = i - 1;

    while (j >= start && secuence[j] > cur) {
      secuence[j + 1] = secuence[j];
      j--;
    }
    secuence[j + 1] = cur;
  }
}

function median(secuence, lo, mid, hi) {
  if (secuence[lo] <= secuence[mid]) {
    if (secuence[mid] <= secuence[hi]) {
      return mid;
    }
  } else {
    if (secuence[lo] <= secuence[hi]) {
      return lo;
    }
  }
  return hi;
}

function tukeyMedian(secuence, lo, hi) {
  const part = Math.floor((hi - lo) / 3);
  const medianA = median(secuence, lo, Math.floor(lo + part / 2), lo + part);
  const medianB = median(
    secuence,
    lo + part + 1,
    Math.floor(lo + (part * 3 + 1) / 2),
    lo + part * 2
  );
  const medianC = median(
    secuence,
    Math.floor(lo + (part * 2 + 1)),
    Math.floor(lo + (part * 5) / 2 + 1),
    hi
  );
  return median(secuence, medianA, medianB, medianC);
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// function partition(support, secuence, start, end) {
//   let i = start;
//   for (let j = start; j < end; j++) {
//     if (secuence[j] < support) {
//       swap(secuence, i++, j);
//     }
//   }
//   swap(secuence, i, end - 1);
//   return [i, i + 1];
// }

function partition(arr, start, end) {
  const supportElement = arr[start];
  let i = start + 1;
  let j = end;

  while (true) {
    while (i < end && arr[i] < supportElement) {
      i += 1;
    }
    while (j > start && arr[j] > supportElement) {
      j -= 1;
    }
    if (i >= j) break;
    swap(arr, i++, j--);
  }
  swap(arr, start, j);
  return [j, j + 1];
}

function quickSort(secuence, start = 0, end = secuence.length - 1) {
  if (end - start <= 32) {
    insertionSort(secuence, start, end);
    return;
  }
  const med = tukeyMedian(secuence, start, end);
  swap(secuence, start, med);
  const [p1, p2] = partition(secuence, start, end);
  quickSort(secuence, start, p1 - 1);
  quickSort(secuence, p2, end);
}

quickSort(secuence);
console.log(secuence.join(" "));
