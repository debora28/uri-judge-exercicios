var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split(' ');

let numeros = [];
numeros.push(parseInt(lines.shift()));
numeros.push(parseInt(lines.shift()));
numeros.push(parseInt(lines.shift()));

let crescente = [];
numeros.forEach(num => {
    crescente.push(num);
});

crescente.sort((a, b) => a - b);
crescente.forEach(element => {
    console.log(element)
}); 
console.log("");
numeros
numeros.forEach(element => {
    console.log(element)
}); 
