var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split(" ");

let inicial = parseInt(lines.shift());
let final = parseInt(lines.shift());

let duracao = 1;

if (inicial >= final) {
  duracao = 24 - inicial + final;
} else {
  duracao = final - inicial;
}
console.log(`O JOGO DUROU ${duracao} HORA(S)`);
