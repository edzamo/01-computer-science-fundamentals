function potAlg(i, j) {
  return Math.pow(i, j);
}

function staticMA() {
  const ma = Array.from({ length: 9 }, () => Array(3));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 3; j++) {
      ma[i][j] = potAlg(i + 1, j + 1);
      process.stdout.write(ma[i][j] + "\t");
    }
    console.log();
  }
}
function showMA3x3(ma) {
  for (let i = 0; i < 3; i++) {
    let row = "";
    for (let j = 0; j < 3; j++) {
      row += ma[i][j] + "\t";
    }
    console.log(row);
  }
}

function multMA() {
  const a = [
    [3, 1, -2],
    [0, 4, 2],
    [7, 5, 1],
  ];

  const b = [
    [-1, 0, 8],
    [3, 6, 9],
    [0, 0, 3],
  ];

  const c = Array.from({ length: 3 }, () => Array(3).fill(0));

  showMA3x3(a);
  console.log("\tx");
  showMA3x3(b);
  console.log("\t=");

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j] + a[i][2] * b[2][j];
    }
  }

  showMA3x3(c);
}
const prompt = require("prompt-sync")();

function dinamicMA() {
  const rows = parseInt(prompt("Set the number of rows: "), 10);
  const ma = [];
  const columns = [];

  for (let i = 0; i < rows; i++) {
    const col = parseInt(
      prompt(`Set the number of columns for the row ${i + 1}: `),
      10
    );
    columns[i] = col;
    ma[i] = Array(col);
  }

  for (let i = 0; i < rows; i++) {
    let row = "";
    for (let j = 0; j < columns[i]; j++) {
      ma[i][j] = potAlg(i + 1, j + 1);
      row += ma[i][j] + "\t";
    }
    console.log(row);
  }
}

dinamicMA();
