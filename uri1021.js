var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");
let valores = lines.shift();

let n = parseFloat(valores);

const cedulas = [100, 50, 20, 10, 5, 2];
const moedas = [1.0, 0.5, 0.25, 0.1, 0.05, 0.01];

console.log("NOTAS:");
cedulas.forEach((element) => {
  console.log(
    `${parseInt(n / element)} nota(s) de R$ ${element.toFixed(2)}`
  );
  n = (n%element) + 0.00001;
});

console.log("MOEDAS:");
moedas.forEach((element) => {
  console.log(
    `${parseInt(n / element)} moeda(s) de R$ ${element.toFixed(2)}`
  );
  n = (n%element) + 0.00001;
});
