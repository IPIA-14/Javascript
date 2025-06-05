class alumno{
    #nombre
    #edad
    constructor(nombre,edad){
        this.#nombre = nombre
        this.#edad = edad
    }

    getNombre(){   // para retonar el nombre
        return this.#nombre
    }

    getEdad(){
        return thiss.#edad
    }
}

class curso{
    #nombre
    #alumnos
    constructor(nombre){
        this.#nombre = nombre
        this.#alumnos = []
    }
    getNombre(){
        return this.#nombre
    }

    matricular(alumno){
        this.#alumnos.push(alumno)
    }
//esto es xq es privada la lista con el "#"

    getAlumnos(){
        return this.#alumnos
    }
}

//IMPLEMENTACION

let curso = new curso("Desarrollo de software")

let alumno1 = new alumno("Juan Perez",20)
let alumno2 = new alumno("Maria Perez",21)
let alumno3 = new alumno("Juan Ipia",17)

curso.matricular(alumno1)
curso.matricular(alumno2)
curso.matricular(alumno3)

let alumnos = curso.getAlumnos()

alumnos.forEach(alumno=>{
    console.log(alumno.getNombre())
    console.log(alumno.getEdad())
    console.log("---")
});

