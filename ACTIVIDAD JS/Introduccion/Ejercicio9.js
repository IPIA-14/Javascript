function cambioVar(){
    let valor1 = parseInt(document.getElementById("input1").value);
    let valor2 = parseInt(document.getElementById("input2").value);

    let numero1 = valor1
    let numero2 = valor2

    let espera = valor1
    valor1 = valor2
    valor2 = espera

    document.getElementById("mostrar").innerHTML = "El numero uno (" + (numero1) + ") se intercambio a numero dos (" + (numero2) + ") y el valor dos se intercambio a valor uno <br> A continuacion el cambio: " + valor1 + ", " + valor2

    const botonRecargar = document.getElementById("botonReiniciar");
    botonRecargar.addEventListener("click", () => {
        location.reload(); 
    });
}
