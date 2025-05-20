const prompt = require("prompt-sync")()

function calcularAreaCirculo(radio){
    let area = Math.PI * Math.pow(radio, 2)
    return area
}

let radio = prompt("Ingrese el radio del circulo: ")
console.log("El area del circulo es: " + calcularAreaCirculo(radio))