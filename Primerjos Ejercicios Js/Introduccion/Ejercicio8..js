function torta(){
    let valor1 = parseInt(document.getElementById("input1").value);
    let papa = 200 * valor1
    let huevos = 1 * valor1
    let cebolla = 60 * valor1

    document.getElementById("mostrar").innerHTML = "Para la receta se deben colocar  " +papa + "gr de papa, " + huevos + " huevos y " + cebolla + "gr de cebolla"

    const botonRecargar = document.getElementById("botonReiniciar");
    botonRecargar.addEventListener("click", () => {
        location.reload(); 
    });

}