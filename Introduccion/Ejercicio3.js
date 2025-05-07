function nombre(){
    let valor1 = document.getElementById("input1").value;
    
    document.getElementById("mostrar").innerHTML = "Hola! " + valor1 + " Este fue el ejercicio 3 de Javascript"

    const botonRecargar = document.getElementById("botonReiniciar");
    botonRecargar.addEventListener("click", () => {
        location.reload(); 
    });
}

let btn = document.getElementById("nombre");
document.addEventListener("click", btn)