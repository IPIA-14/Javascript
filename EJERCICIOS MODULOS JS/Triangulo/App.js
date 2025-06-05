import Triangulo from "./Triangulo.js";

let botonArea= document.getElementById("btnCalcular");
let base, altura;
botonArea.addEventListener("click", () => {
    if (validarDatos()) {
        let unTriangulo = new Triangulo(base, altura);
        let area = unTriangulo.calcularAreaTriangulo();
        alert("La área del triangulo es de: " + area + "metros cuadrados");
    }
})



function validarDatos() {
    base = document.getElementById("txtBase").value;
    altura = document.getElementById("txtAltura").value;

    if (base === "" || altura === "") {
        alert("Debes ingresar los datos");
        return false;
    }

    return true;
}


/*
if (base && altura){
        let triangulo = new Triangulo(base,altura);
        let area = triangulo.calcularAreaTriangulo();
        document.getElementById("txtAltura").value = area;
    }


function obtenerAreaTriangulo(){
    //Crear el triangulo
    let base = document.getElementById("txtBase").value
    let altura = document.getElementById("txtAltura").value

    

    //Llamar al metodo para calcular el area del triangulo
}
obtenerAreaTriangulo();
*/