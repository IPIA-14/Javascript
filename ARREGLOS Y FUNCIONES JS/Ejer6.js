/* Hacer una función que reciba un arreglo de números y devuelva la suma de todos sus valores. */

const prompt = require("prompt-sync")()

function sumarNumeros(arreglo){
    let suma = 0
    for (let i = 0; i < arreglo.length; i++){
        suma += arreglo[i]
    }
    console.log("La suma de los valores de: " + arreglo + " es: " + suma)
}

sumarNumeros([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])