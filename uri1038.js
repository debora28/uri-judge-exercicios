var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split(" ");

let codigo = parseInt(lines.shift());
let qtd = parseInt(lines.shift());

const menu = [
  { cod: 1, nome: "cachorro", preco: 4.0 },
  { cod: 2, nome: "xsalada", preco: 4.5 },
  { cod: 3, nome: "xbacon", preco: 5.0 },
  { cod: 4, nome: "torrada", preco: 2.0 },
  { cod: 5, nome: "refri", preco: 1.5 },
];

let codEscolhido = menu.filter((menu) => menu.cod === codigo);
let preco = codEscolhido[0].preco;
let total = preco * qtd;
console.log(`Total: R$ ${total.toFixed(2)}`);
