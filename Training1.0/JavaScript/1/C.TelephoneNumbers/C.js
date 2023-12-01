const fs = require("fs");
const [curNumber, ...rest] = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .trim()
  .split("\n");

function getCodeWithNumber(phoneNumber) {
  phoneNumber = phoneNumber.replace(/\D/g, "");
  if (phoneNumber.length < 10) return "495" + phoneNumber;
  return phoneNumber.slice(-10);
}

function isRecordedNumber(curNumber, tNumbers) {
  curNumber = getCodeWithNumber(curNumber);

  for (let i = 0; i < tNumbers.length; i++) {
    let number = getCodeWithNumber(tNumbers[i]);
    curNumber === number ? console.log("YES") : console.log("NO");
  }
}

isRecordedNumber(curNumber, rest);
