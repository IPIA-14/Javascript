function cambioTiempo(){
    let valor1 = parseInt(document.getElementById("input1").value);
    let cambio = valor1 * 60

    document.getElementById("mostrar").innerHTML = "El resultado de la conversion de minutos a segundos es de: " + cambio

    const botonRecargar = document.getElementById("botonReiniciar");
    botonRecargar.addEventListener("click", () => {
        location.reload(); 
    });
}

let btn = document.getElementById("media");
document.addEventListener("click", btn)