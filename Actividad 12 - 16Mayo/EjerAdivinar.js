const prompt = require("prompt-sync")()


let numero = Math.floor(Math.random() * 5) + 1;
let intentos = 1;

while(intentos <=5){
    let Num = parseInt(prompt("Ingresa un numero entre 1 y el 100: "));

    if (numero === Num){
        console.log("El numero ingresado es correcto,  Acertaste en " + intentos + " Intentos")
        break
    }else if (numero > Num){
        console.log("El numero es mayor...")
    }else{
        console.log("El numero es mayor...")
    }
    
    if (intentos === 5){
        console.log("Intentos restantes "+ (5 - intentos))
        break;
    }else{
        console.log("Intentos restantes "+ (5 - intentos))
        intentos ++;
    }
}
if (intentos === 5){
    console.log("No has acertado el numero en 5 intentos, el numero era: "+ Num)
}