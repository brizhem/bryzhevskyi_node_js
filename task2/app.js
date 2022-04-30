const alphabet = require("./alphabet");
const mapAlphabet = alphabet.getMapAlphabet();

function grid(N) {
  if (N < 0) return null;

  let grid = "";
  //Cycle for row
  for (i = 0; i < N; i++) {
    //Cycle for column
    for (j = i; j < N + i; j++) {
      const coeff = Math.floor(j / 26);
      const key = j > 25 ? j - 26 * coeff : j;
      grid += mapAlphabet.get(key);
    }

    grid += i === N - 1 ? "" : "\n";
  }

  return grid;
}

console.log(grid(40));
