const fs = require("fs");
const brackets = fs.readFileSync(__dirname + "/input.txt", "utf-8").trim();

function isOpen(char) {
  return char === "(" || char === "{" || char === "[";
}

function isPair(open, closed) {
  return (
    (open === "(" && closed === ")") ||
    (open === "[" && closed === "]") ||
    (open === "{" && closed === "}")
  );
}

function isCorrectBrackets(brackets) {
  const stack = [];

  for (let i = 0; i < brackets.length; i++) {
    if (isOpen(brackets[i])) stack.push(brackets[i]);
    else {
      if (isPair(stack[stack.length - 1], brackets[i])) stack.pop();
      else return "no";
    }
  }

  return stack.length ? "no" : "yes";
}

console.log(isCorrectBrackets(brackets));
