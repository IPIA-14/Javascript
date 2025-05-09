function Numeros(){
    let valor1 = parseInt(document.getElementById("input1").value);
    let parImpar = valor1 % 2 === 0;
    
    document.getElementById("mostrar").innerHTML = "El numero " + valor1 + " es " + parImpar

    const botonRecargar = document.getElementById("botonReiniciar");
    botonRecargar.addEventListener("click", () => {
        location.reload(); 
    });
}