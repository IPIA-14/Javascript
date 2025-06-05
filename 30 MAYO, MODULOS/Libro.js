
export default class Libro {
    #paginas;

    contructor(titulo,autor,paginas){
        this.titulo = titulo;
        this.autor = autor;
        this.#paginas=paginas;
    }

    getpaginas(){
        return this.#paginas;
    }

}


