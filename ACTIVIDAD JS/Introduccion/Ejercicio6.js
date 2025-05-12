function cambioTiempo(){
    let valor1 = parseInt(document.getElementById("input1").value);
    let valor2 = parseInt(document.getElementById("input2").value);
    let cambio = valor1 * 60
    let cambioMin = (valor2 * 60) * 60

    document.getElementById("mostrar").innerHTML = "El resultado de la conversion de minutos a segundos es de: " + cambio + "<br> El cambio de horas a segundos es de: " + cambioMin

    const botonRecargar = document.getElementById("botonReiniciar");
    botonRecargar.addEventListener("click", () => {
        location.reload(); 
    });
}

