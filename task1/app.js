function calculate(str) {
  let arrStr = str.split(" ");

  if (arrStr.length !== 3) {
    return "";
  }

  let leftPart = arrStr[0];
  let operator = arrStr[1];
  let rightPart = arrStr[2];
  let result = 0;

  if (operator === "+") {
    result = leftPart.length + rightPart.length;
  } else if (operator === "-") {
    if (leftPart.length >= rightPart.length) {
      result = leftPart.length - rightPart.length;
    }
  } else if (operator === "*") {
    result = leftPart.length * rightPart.length;
  } else if (operator === "//") {
    if (rightPart.length > 0) {
      result = Math.floor(leftPart.length / rightPart.length);
    }
  }

  resultStr = "";
  for (let i = 1; i <= result; i++) {
    resultStr += ".";
  }

  return resultStr;
}

let strInput = ".... // ...";
console.log(calculate(strInput));
