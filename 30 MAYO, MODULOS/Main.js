import { magicNumber } from "./Operaciones.js"; //Importar la variable magicNumber
import Libro from "./Libro.js";

console.log(magicNumber);

const libro = new Libro("La vida","Juan Perez",500);
console.log(libro.getpaginas());

if (Number > 42){
    import("./Operaciones.js").then(module => {
        console.log(module.sumar);
    }); 
}

import carros from "./Carros.json" with{"type": "json"}
console.log(carros);

carros.forEach(carro => {
    console.log( "Placa: " + carro.placa);
    console.log( "Marca. " + carro.marca);
    console.log( "Color: " + carro.color);
    console.log( "-----------------------");
});