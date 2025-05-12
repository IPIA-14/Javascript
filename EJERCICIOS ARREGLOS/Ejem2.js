const prompt = require("prompt-sync")()

const ciudades =  ["POPAYAN", "NEIVA", "BOGOTA" , "CALI" , "MEDELLIN"];
let ciudad = prompt("Ingresa una ciudad: ")

//Version larga para ver si existe la cuidad
/*let existe = false
for (let i = 0; i < ciudades.length; i++){
    if (ciudad.toUpperCase()===ciudades[i]){
        existe=true
        break
    }
}

if(existe){
    console.log("La cuiad " + ciudad + " ya existe")
}else{
    console.log("La cuiad " + ciudad + " NO  existe")
    //Agregar al arreglo
    ciudades.push(ciudad.toUpperCase())
}
console.log(ciudades)*/

//corta
let exist = ciudades.includes(ciudad.toUpperCase())

if(exist){
    console.log("La cuiad " + ciudad + " ya existe")
}else{
    console.log("La cuiad " + ciudad + " NO  existe")
    //Agregar al arreglo
    ciudades.push(ciudad.toUpperCase())
}
console.log(ciudades)