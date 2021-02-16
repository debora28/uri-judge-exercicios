var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split(" ");

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());

let d = Math.pow(b, 2) - (4 * a * c);

if (d > 0 && 2 * a !== 0) {
  x1 = (-b + Math.sqrt(d)) / (2 * a);
  x2 = (-b - Math.sqrt(d)) / (2 * a);
  console.log(`R1 = ${x1.toFixed(5)}`);
  console.log(`R2 = ${x2.toFixed(5)}`);
} else {
  console.log("Impossivel calcular");
}
