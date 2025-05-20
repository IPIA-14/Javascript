const prompt = require("prompt-sync")()

let x = prompt("Ingrese el numero 1");
let y = prompt("Ingrese el numero 2");
let z = -Infinity;

for (let i = 0; i <= 100; i++) {
    let x = getrandomValue();
    let y = getrandomValue();
    let z = x * x + y * y;
}