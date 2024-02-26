const fs = require("fs");
const [a, b, c, d, e, f] = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .trim()
  .split("\n");

function systemOfLinearEquations(a, b, c, d, e, f) {
  if (a == b && b == c && c == d && d == 0) {
    if (e == f && f == 0) {
      return console.log(5);
    } else return console.log(0);
  }

  if (a == c && c == 0) {
    if (b == 0) {
      if (e != 0) return console.log(0);
      return console.log(4, f / d);
    }
    if (d == 0) {
      if (f != 0) return console.log(5);
      return console.log(4, e / b);
    }
    if (e / b != f / d) return console.log(0);
    return console.log(4, e / b);
  }

  if (b == d && d == 0) {
    if (a == 0) {
      if (e != 0) return console.log(0);
      return console.log(3, f / c);
    }
    if (c == 0) {
      if (f != 0) return console.log(0);
      return console.log(3, e / a);
    }
    if (e / a != f / c) return console.log(0);
    return console.log(3, e / a);
  }

  if (a == b && b == 0) {
    if (e != 0) return console.log(0);
    return console.log(1, -c / d, f / d);
  }

  if (c == d && d == 0) {
    if (f != 0) return console.log(0);
    return console.log(1, -a / b, e / b);
  }

  if (a == 0) return console.log(2, (f - (d * e) / b) / c, e / b);
  if (b == 0) return console.log(2, e / a, (f - (c * e) / a) / d);
  if (c == 0) return console.log(2, (e - (b * f) / d) / a, f / d);
  if (d == 0) return console.log(2, f / c, (e - (a * f) / c) / a);

  if (a / c == b / d) {
    if (e == f && f == 0) return console.log(1, -a / b, 0);
    if (e == 0 || f == 0) return console.log(0);
    if (a / c != e / f) return console.log(0);
    else return console.log(1, -a / b, e / b);
  }

  delta = a * d - c * b;
  if (delta == 0) return console.log(0);

  x = (e * d - f * b) / delta;
  y = (f * a - e * c) / delta;
  return console.log(2, x, y);
}

systemOfLinearEquations(+a, +b, +c, +d, +e, +f);
