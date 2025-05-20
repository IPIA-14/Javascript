const prompt = require("prompt-sync")()

function generarContraseña(){
    let letras = prompt("Ingrese la cantidad de letras en mayusculas: ")
    let min = prompt("Ingrese la cantidad de letras en minusculas: ")
    let digitos = prompt("Ingrese la cantidad de digitos: ")
    let caracteres = prompt("Ingrese la cantidad de caracteres especiales: ")
    let contraseña = ""
    for (let i = 0; i < letras; i++){
        let letra = prompt("Ingrese la letra: ")
        contraseña += letra.toUpperCase()
    }
    for (let i = 0; i < min; i++){
        let letra = prompt("Ingrese la letra: ")
        contraseña += letra.toLowerCase()
    }
    for (let i = 0; i < digitos; i++){
        let digito = prompt("Ingrese el digito: ")
        contraseña += digito
    }
    for (let i = 0; i < caracteres; i++){
        let caracter = prompt("Ingrese el caracter: ")
        contraseña += caracter
    }
    console.log("Contraseña generada: " + contraseña)
}

generarContraseña()