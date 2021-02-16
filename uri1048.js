var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

let salario = parseFloat(lines.shift());
let reajuste = 0;

if (salario <= 400.00) {
  reajuste = 15;
} else if (salario >= 400.01 && salario <= 800.00) {
  reajuste = 12;
} else if (salario >= 800.01 && salario <= 1200.00) {
  reajuste = 10;
} else if (salario >= 1200.01 && salario <= 2000.00) {
  reajuste = 7;
} else if (salario > 2000.00) {
  reajuste = 4;
}

let novoSalario = salario + (salario * reajuste)/100;
let ganho = novoSalario - salario;
console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
console.log(`Reajuste ganho: ${ganho.toFixed(2)}`);
console.log(`Em percentual: ${reajuste} %`);
