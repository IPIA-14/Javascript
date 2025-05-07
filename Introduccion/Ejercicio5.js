function consumo(){

    let valor1 = parseInt(document.getElementById("input1").value);
    let valor2 = parseInt(document.getElementById("input2").value);
    let consumo = valor1 / valor2

    document.getElementById("mostrar").innerHTML = "El consumo de gasolina del automovil es de " + consumo + " litros de gasolina por km"

    const botonRecargar = document.getElementById("botonReiniciar");
    botonRecargar.addEventListener("click", () => {
        location.reload(); 
    });

}

let btn = document.getElementById("consumo");
document.addEventListener("click",btn)