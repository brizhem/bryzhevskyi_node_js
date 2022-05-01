function isValidParentheses(str) {
  let countLeftParentheses = 0;
  let countRightParentheses = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      countLeftParentheses++;
    } else {
      countRightParentheses++;
    }
  }

  return countLeftParentheses === countRightParentheses;
}

const strInput = "(())((()())())";
console.log(isValidParentheses(strInput));
