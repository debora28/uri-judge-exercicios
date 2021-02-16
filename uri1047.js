var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split(" ");

let horaInicial = parseInt(lines.shift());
let minutoInicial = parseInt(lines.shift());
let horaFinal = parseInt(lines.shift());
let minutoFinal = parseInt(lines.shift());

let tempoInicial = (horaInicial *  60) + minutoInicial;
let tempoFinal = (horaFinal *  60) + minutoFinal;

let duracao = 1;

if (tempoInicial >= tempoFinal) {
  duracao = (24*60) - tempoInicial + tempoFinal;
} else {
  duracao = tempoFinal - tempoInicial;
}

horas = parseInt(duracao/60);
minutos =  duracao % 60;
console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
