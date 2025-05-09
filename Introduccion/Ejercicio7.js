function scrip(){
    let valor1 = parseInt(document.getElementById("input1").value);
    let decenas = Math.floor(valor1 / 10);
    let unidades = valor1 % 10;

    document.getElementById("mostrar").innerHTML = "En el numero " + valor1 + " hay " + decenas + " decenas y " + unidades + " unidades"

    const botonRecargar = document.getElementById("botonReiniciar");
    botonRecargar.addEventListener("click", () => {
        location.reload(); 
    });
}