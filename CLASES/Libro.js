class libro{
    //constructor

    constructor(titulo, autor, numeroPag){ //This palabra constructor es la que se usa para llamar a la funcion osea palabra clave
        this.titulo = titulo
        this.autor = autor
        this.numeroPag = numeroPag
    }

    getNumeroPag(){
    return this.numeroPag
}

// # privado
// - publico
// * protegido


}

let unLibro = new libro("El libro de la vida", "Juan Perez", 100)

console.log(typeof(unLibro))
console.log("El titulo del libro es: " + unLibro.titulo)
unLibro.titulo = "El libro de jaun"
console.log("El titulo del libro es: " + unLibro.titulo)

console.log(unLibro.getNumeroPag())
