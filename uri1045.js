var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split(" ");

let triangulo = [];
triangulo.push(parseFloat(lines.shift()));
triangulo.push(parseFloat(lines.shift()));
triangulo.push(parseFloat(lines.shift()));
triangulo.sort((a, b) => b - a);

let a = triangulo[0];
let b = triangulo[1];
let c = triangulo[2];

if (a >= b + c) {
  console.log("NAO FORMA TRIANGULO");
} else {
  if (Math.pow(a, 2) === Math.pow(b, 2) + Math.pow(c, 2)) {
    console.log("TRIANGULO RETANGULO");
  } else if (Math.pow(a, 2) > Math.pow(b, 2) + Math.pow(c, 2)) {
    console.log("TRIANGULO OBTUSANGULO");
  } else if (Math.pow(a, 2) < Math.pow(b, 2) + Math.pow(c, 2)) {
    console.log("TRIANGULO ACUTANGULO");
  }

  if (a === b && b === c) {
    console.log("TRIANGULO EQUILATERO");
  } else if (a === b || b === c || a === c) {
    console.log("TRIANGULO ISOSCELES");
  }
}
