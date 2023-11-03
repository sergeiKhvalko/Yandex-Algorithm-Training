const fs = require("fs");
const [k, n, ...rest] = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .trim()
  .split("\n");
const employees = [0];
employees.push(...rest.map(Number));

function elevator(k, n, employees) {
  let minTime = 0;
  let parking = 0;
  let currElevatorFloor = parking;

  for (let floor = n; floor > parking; floor--) {
    if (employees[floor] === 0) continue;

    minTime += Math.abs(floor - currElevatorFloor);
    currElevatorFloor = floor;
    let rest = employees[floor] % k;
    let fullLoadCount = Math.floor(employees[floor] / k);

    if (fullLoadCount) {
      minTime += (fullLoadCount * 2 - 1) * (floor - parking);
      employees[floor] -= fullLoadCount * k;
      employees[parking] += fullLoadCount * k;
      currElevatorFloor = parking;
    }

    if (rest) {
      minTime += Math.abs(floor - currElevatorFloor);
      employees[floor - 1] += rest;
      employees[floor] = 0;
      minTime += 1;
      currElevatorFloor = floor - 1;
    }
  }
  return minTime;
}

console.log(elevator(k, n, employees));
