let num1 = 2
let num2 = 8

if (num1 > num2) {
  let temp = num1;
  num1 = num2;
  num2 = temp;
}

let sumaPsres = 0
let impares = 0
let contadorImpares = 0

for (let i = num1; i<=num2; i++){
    if(i % 2 === 0){
        sumaPsres = sumaPsres + i
    }else{
        impares = impares + i
        contadorImpares++
    }
}

let PromImpares = 0
if(contadorImpares > 0){
    PromImpares = impares / contadorImpares
}

console.log("La suma de los pares es de: " + sumaPsres)
console.log("El promedio de los impares es: " + PromImpares)