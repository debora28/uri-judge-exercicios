var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split(" ");

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift());

if ((a + b <= c) || (b + c <= a) || (a + c <= b)) {
  let area = ((a + b) * c) / 2;
  console.log(`Area = ${area.toFixed(1)}`);
} else {
  let perimetro = a + b + c;
  console.log(`Perimetro = ${perimetro.toFixed(1)}`);
}
