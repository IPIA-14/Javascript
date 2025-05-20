/* Hacer una función que reciba como parámetro un arreglo de números y retorne la cantidad de
números pares existentes en el arreglo. */

const prompt = require("prompt-sync")()

function contarPares(arreglo){
    let pares = 0
    for (let i = 0; i < arreglo.length; i++){
        if (arreglo[i] % 2 === 0){
            pares++
        }
    }
    console.log("La cantidad de pares en : " + arreglo + " es: " + pares)
}

contarPares([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])