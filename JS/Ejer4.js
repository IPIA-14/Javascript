let edad = 21
let nombre = "Juan"

if (edad >18 ){
    console.log("Para ingresar a la sala de juesgos " + nombre + " debes pagar 10.000") 
}else if(edad >=5 && edad <=18){
    console.log("Para ingresar a la sala de juesgos " + nombre + " debes pagar 5.000")
}else if(edad < 5){
    console.log("Para ingrear a la sala de juegos " + nombre + " para ti es GRATIS!")
}