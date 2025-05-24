function cantidadPalabras(str) {
    let palabras = 1

    for (let i = 0; i < str.length; i ++){
        if (str[i] == " "){
            palabras ++
        }
    }
    
    return palabras
}
console.log(cantidadPalabras("Juan Ipia Bienvenido a JavaScript"))