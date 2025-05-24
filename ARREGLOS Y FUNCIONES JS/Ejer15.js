const prompt = require('prompt-sync')(); // Para leer datos en consola (Node.js)

let votosTotales = 0;
let votosUno = 0;
let votosDos = 0;
let votosTres = 0;
let votosBlanco = 0;

const maxVotantes = 50;
const clavePresidente = "1234"; // puedes cambiarla si quieres

console.log("=== MENU ELECCIONES 2025 ===");

while (votosTotales < maxVotantes) {
    console.log(`
1. Candidato Uno
2. Candidato Dos
3. Candidato Tres
4. Voto en Blanco
5. Cerrar elecciones (clave)
    `);

    let opcion = prompt("Seleccione una opci�n: ");

    if (opcion === "1") {
        votosUno++;
        votosTotales++;
    } else if (opcion === "2") {
        votosDos++;
        votosTotales++;
    } else if (opcion === "3") {
        votosTres++;
        votosTotales++;
    } else if (opcion === "4") {
        votosBlanco++;
        votosTotales++;
    } else if (opcion === "5") {
        let clave = prompt("Ingrese la clave para cerrar elecciones: ");
        if (clave === clavePresidente) {
            console.log("? Elecciones cerradas por el presidente de mesa.");
            break;
        } else {
            console.log("? Clave incorrecta. Contin�an las votaciones.");
        }
    } else {
        console.log("?? Opci�n no v�lida. Intente de nuevo.");
    }

    console.log(`Votos registrados: ${votosTotales}/${maxVotantes}`);
}

console.log("\n=== RESULTADOS FINALES ===");
console.log(`Personas que votaron: ${votosTotales}`);
console.log(`Candidato Uno: ${votosUno} votos`);
console.log(`Candidato Dos: ${votosDos} votos`);
console.log(`Candidato Tres: ${votosTres} votos`);
console.log(`Votos en Blanco: ${votosBlanco}`);
