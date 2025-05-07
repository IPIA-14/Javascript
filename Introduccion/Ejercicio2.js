let nombre = "Juan Ipia";
document.getElementById("mostrar").innerHTML = 
"Hola " + nombre + " Vamos a calcular el area y perimetro del cuadrado, ingresa los datos correspondientes."

function resultado(){

    let valor1 = parseInt(document.getElementById("input1").value);
    let valor2 = parseInt(document.getElementById("input2").value);
    let area = valor1 * valor2
    let perimetro = (valor1 * 2) + (valor2 * 2)

    const botonRecargar = document.getElementById("botonReiniciar");
    botonRecargar.addEventListener("click", () => {
        location.reload(); 
    });
    
    document.getElementById("mostrar").innerHTML = "El area del cuadrado es de: " + area + "<br> El resultado de el perimetro del cuadrado es de: " + perimetro
}

let btn = document.getElementById("resultadoAreas");
document.getElementById("click", btn)