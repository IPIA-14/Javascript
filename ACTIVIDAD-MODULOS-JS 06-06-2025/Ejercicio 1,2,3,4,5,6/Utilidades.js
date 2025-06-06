
/*EJercicio 1
function EnRango(numero){
    if(numero >= 10 && numero <=50){
        return "Estas en el rango correcto";
    }else{
        return "Estas fuera del rango";
    }
}

export {EnRango};

//EJercicio 2


function calcularDescuento(precio){
    if (precio > 1000){
        return (precio * 0.20)
    }else if (precio >= 500 || precio <= 100){
        return (precio * 0.10)
    }else if (precio < 500){
        return "No puedes usar descuento"
    }
        
}

export {calcularDescuento}

//ejrcicio 3


function categoriaIMc(peso){
    if (peso < 18.5){
        return "Usted se encuentra en la categoría I Bajo peso" + "con un peso de " + peso
    }else if (peso >= 18.5 && peso < 25){
        return "Usted se encuentra en la categoría II Medio peso" + "con un peso de " + peso
    }else if (peso >= 25 && peso < 30){
        return "Usted se encuentra en la categoría III Alto peso" + "con un peso de " + peso	
    }else if (peso >= 30){
        return "Usted se encuentra en la categoría IV Obesidad" + "con un peso de " + peso
    }
}

export {categoriaIMc}

//Ejercicio 4


function nivelRiesgo(edad, emfermedades){
    if (edad > 60 || emfermedades){
        return "Usted se encuentra en Alto riesgo" 
    }else if (edad > 40 && edad <= 60){
        return "Usted se encuentra en  Medio riesgo"
    }else if (edad <= 40){
        return "Usted se encuentra en Bajo riesgo"
    }
}

export {nivelRiesgo}


// Ejercicio 5

function esBisiesto(año) {
  if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
    return "El años es bisiesto";
  } else {
    return "El año no es bisiesto";
  }
}

export { esBisiesto }; */

//ejercicio 6

function esElegibleParaPrestamo(salario, puntajeCredito) {
  if (salario >= 3000000 && puntajeCredito >= 650) {
    return "Usted es elegible para préstamo";
  } else {
    return "Usted no es elegible para préstamo";
  }
}

export { esElegibleParaPrestamo };
