
let nombre = "Juan Ipia";
document.getElementById("mostrar").innerHTML =
 "Hola " + nombre + " vamos a calcular cuanto pagaras hoy, ingresa los datos correspondientes."

function pagar(){

    let valor1 = parseInt(document.getElementById("input1").value);
    let valor2 = parseInt(document.getElementById("input2").value);
    let iva = valor1 * valor2 / 100
    let resultado = valor1 + iva;

    document.getElementById("mostrar").innerHTML = "El total que usted debe pagar por el producto es de: $" + resultado + "<br> Usted pagara por el producto un total de: $" + valor1 + "<br> Usted pagara por el iva un total de: $" + iva

    const botonRecargar = document.getElementById("botonReiniciar");
    botonRecargar.addEventListener("click", () => {
        location.reload(); 
    });
}
    
