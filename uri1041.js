var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split(" ");

x = parseFloat(lines.shift());
y = parseFloat(lines.shift());

if (x == 0) {
    if (y == 0){
        console.log("Origem");
    } else {
        console.log("Eixo Y");
    }
} 
else if (y == 0 && x !== 0){
    console.log("Eixo X");
}
else if (x > 0) {
  if (y > 0) {
    console.log("Q1");
  } 
  else if (y < 0) {
    console.log("Q4");
  }
} 
else if (x < 0) {
  if (y > 0) {
    console.log("Q2");
  } 
  else if (y < 0) {
    console.log("Q3");
  }
}
