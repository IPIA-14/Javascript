/* Hacer una función que reciba como parámetro una cadena de texto y retorne la cantidad de
vocales existentes.*/
const prompt = require("prompt-sync")()

function contarVocales(texto){
    let vocales = texto.match(/[aeiou]/gi)
    return vocales.length
}

let texto = prompt("Ingrese la cadena de texto: ")
console.log("La cantidad de vocales es: " + contarVocales(texto))