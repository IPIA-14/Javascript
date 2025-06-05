import Libro from "./Libro.js";

let libros = [];

let btnCrear = document.getElementById("btnCrear");
btnCrear.addEventListener("click", function() {
    // Obtener valores
    let titulo = document.getElementById("txtTitulo").value.trim();
    let autor = document.getElementById("txtAutor").value.trim();
    let editorial = document.getElementById("txtEditorial").value.trim();
    let idioma = document.getElementById("txtIdioma").value;

    // Validar campos vacíos
    if (titulo === "" || autor === "" || editorial === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campos incompletos',
            text: 'Por favor llena todos los campos antes de crear el libro.'
        });
        return;
    }

    // Crear objeto de tipo Libro
    let nuevoLibro = new Libro(titulo, autor, editorial, idioma);

    // Agregar al arreglo
    libros.push(nuevoLibro);

    // Mostrar datos en la tabla
    mostrarDatos();

    // Limpiar formulario
    document.getElementById("frmLibro").reset();

    // Notificación
    Swal.fire({
        icon: 'success',
        title: 'Libro agregado',
        text: 'El libro se ha agregado correctamente.'
    });

    console.log(libros);
});

function mostrarDatos() {
    let tabla = document.getElementById("datosLibros");
    tabla.innerHTML = "";

    for (let i = 0; i < libros.length; i++) {
        let fila = document.createElement("tr");

        let celdaTitulo = document.createElement("td");
        celdaTitulo.innerHTML = libros[i].titulo;
        fila.appendChild(celdaTitulo);

        let celdaAutor = document.createElement("td");
        celdaAutor.innerHTML = libros[i].autor;
        fila.appendChild(celdaAutor);

        let celdaEditorial = document.createElement("td");
        celdaEditorial.innerHTML = libros[i].editorial;
        fila.appendChild(celdaEditorial);

        let celdaIdioma = document.createElement("td");
        celdaIdioma.innerHTML = libros[i].idioma;
        fila.appendChild(celdaIdioma);

        tabla.appendChild(fila);
    }
}


