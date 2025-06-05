export const magicNumber = 42; //Exportar la variable magicNumber

function sumar(){
   magicNumber += 2;
}

const hello = () => "Hola mundo";
const Godbay = () => "Godbay";
class codeBlock {};

export { sumar,
    hello,
    Godbay as godbay,
    hello as hola
} 


// export * from exportar todos los elementos de un archivo
// export { nombreDeVariable } from exportar solo una variable
// export { nombreDeVariable1, nombreDeVariable2 } from exportar varias variables

import * as  module from "./Operaciones.js";

console.log(magicNumber);
console.log(sumar);

//Dynamic import



