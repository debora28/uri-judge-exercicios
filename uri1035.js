var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split(' ');

let a = lines.shift();
let b = lines.shift();
let c = lines.shift();
let d = lines.shift();

if (b > c && d > a && (c + d) > (a + b + c + d)){
    console.log('Valores aceitos');
}
else{
    console.log('Valores nao aceitos');
}