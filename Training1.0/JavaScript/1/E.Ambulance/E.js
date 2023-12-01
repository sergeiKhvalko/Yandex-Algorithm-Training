const fs = require("fs");
const [k1, m, k2, p2, n2] = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .trim()
  .split(" ");

function getEntranceAndFloor(flat, m, totalApartmentsOnEachFloor) {
  const entrance = Math.ceil(flat / (m * totalApartmentsOnEachFloor));
  const floor = Math.ceil(
    (flat - m * totalApartmentsOnEachFloor * (entrance - 1)) /
      totalApartmentsOnEachFloor
  );
  return [entrance, floor];
}

function check(k1, m, k2, p2, n2, totalApartmentsOnEachFloor) {
  const [entrance, floor] = getEntranceAndFloor(
    k2,
    m,
    totalApartmentsOnEachFloor
  );
  if (entrance === p2 && floor === n2) {
    return getEntranceAndFloor(k1, m, totalApartmentsOnEachFloor);
  } else {
    return [-1, -1];
  }
}

function ambulance(k1, m, k2, p2, n2) {
  // const totalApartmentsOnEachFloor = Math.ceil(k2 / (n2 + m * (p2 - 1)));
  let p1 = -1;
  let n1 = -1;
  let found = false;
  for (let i = 1; i < Math.max(k1, k2) + 1; i++) {
    const [p, n] = check(k1, m, k2, p2, n2, i);
    if (p != -1) {
      found = true;
      if (p1 === -1) {
        p1 = p;
        n1 = n;
      } else if (p1 !== p && p1 !== 0) {
        p1 = 0;
      } else if (n1 !== n && n1 !== 0) {
        n1 = 0;
      }
    }
  }

  if (found) return `${p1} ${n1}`;
  else return `-1 -1`;
}

console.log(ambulance(+k1, +m, +k2, +p2, +n2));
// 5 20 2 1 1
// 1 0

// 11 1 1 1 1
// 0 1
