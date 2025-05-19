const prompt = require("prompt-sync")()
const  numeros=[] //1 al 10

//numeros [0] = 1
//numeros [9] = 10

//numeros.push(1) //Añadir el numero del final 
//numeros.push(2)

//push arregla al final
//unshift arreglo al inicio
//.pop elimina al final()
//.shift() elimina el primero
//.length mirar el arreglo propiedades
//.splice Elimina un rango de elementos
//.reverse invierte el orden
//.sort elimina los elementos

for (let index = 0; index <10; index++){
    numeros.push(index + 1)
}
console.log(numeros)

const persona = [] //[Nombre, apellido, correo]
let nombre = prompt("Ingresa tu nombre: ")
persona.push(nombre)
let apellido = prompt("Ingresa tu apellido: ")
persona.push(apellido)
let correo = prompt("Ingresa tu correo: ")
persona.push(correo)

console.log(persona)

console.log(persona[1])
console.log(persona.length)

console.log("-----------------------------------------")

const ciudades =  ["POPAYAN", "NEIVA", "BOGOTA" , "CALI" , "MEDELLIN"];
let ciudad = prompt("Ingresa una ciudad en MAYUSCULA: ")

//Version larga para ver si existe la cuidad
let existe = false
for (let i = 0; i < ciudades.length; i++){
    if (ciudad.toUpperCase()===ciudades[i]){
        existe=true
        break
    }
}

if(existe){
    console.log("La cuiad " + ciudad + " ya existe")
}else{
    console.log("La cuiad " + ciudad + "   NO  existe")
}
