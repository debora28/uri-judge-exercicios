var input = require("fs").readFileSync("./dev/stdin", "utf-8");
var lines = input.split("\n");
notas = lines.shift();
exame = lines.shift();

notas = input.split(" ");

let n1 = parseFloat(notas.shift());
let n2 = parseFloat(notas.shift());
let n3 = parseFloat(notas.shift());
let n4 = parseFloat(notas.shift());

let media = ((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1)) / 10;
console.log(`Media: ${media.toFixed(1)}`);

if (media >= 7.0) {
  console.log("Aluno aprovado.");
} else if (media < 5.0) {
  console.log("Aluno reprovado.");
} else  if ( media >= 5.0 && media <= 6.9 ) {
  
  exame = parseFloat(exame);
  console.log("Aluno em exame.");
  console.log(`Nota do exame: ${exame.toFixed(1)}`);
  media = (media + exame) / 2;

  if (media >= 5.0) {
    console.log("Aluno aprovado.");
  } else {
    console.log("Aluno reprovado.");
  }

  console.log(`Media final: ${media.toFixed(1)}`);
}
