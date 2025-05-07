function media(){
    let valor1 = parseInt(document.getElementById("input1").value);
    let valor2 = parseInt(document.getElementById("input2").value);
    let valor3 = parseInt(document.getElementById("input2").value);
    let media = (valor1 + valor2 + valor3) / 3

    document.getElementById("mostrar").innerHTML = "El resultado de la media es: " + media

    const botonRecargar = document.getElementById("botonReiniciar");
    botonRecargar.addEventListener("click", () => {
        location.reload(); 
    });
}

let btn = document.getElementById("media");
document.addEventListener("click", btn)