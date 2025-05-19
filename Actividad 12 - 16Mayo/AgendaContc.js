const prompt = require("prompt-sync")()

let contactos = []

function Agregarcon(){
    console.clear(); // LImpiar pantalla
    //pedir los datos
    let identifica = prompt("Ingresa tu identificacion: ")
    let nombre = prompt("Ingresa tu nombre: ")
    let telefono = prompt("Ingresa tu numero de telefono: ")
    let correo = prompt("Ingresa tu correo @: ")

    //crear el objeto contacto 
    let contacto ={// para llenar como objeto key y value
        "identificacion": identifica,
        "nombre": nombre, 
        "telefono": telefono,
        "correo": correo
    }
    //agregar el contacto al arreglo
    contactos.push(contacto)
    console.log("Contacto Agregado Correctamente")
}

function ConsultarIdent(){
    console.clear()
    let identifica = prompt("Ingrese la identificacion que desea buscar: ") //pedir identificacion
    existeCon = false
    contactos.forEach(contacto => { //correr arreglo
        if (contacto.identificacion === identifica){ // validar si existe o no 
            console.log("identificacion: " + contacto.identificacion);
            console.log("Nombre: " + contacto.nombre);
            console.log("Telefono: " + contacto.telefono);
            console.log("Correo: " + contacto.correo);
            existeCon = true //colocar true para mostrar si existe
        }
    })
    if (!existeCon){
        console.log("No existe nigun contacto con esa Identificacion")
    }
}

function ListarCon(){
    console.clear()
    console.log("Listado de contactos")
    contactos.forEach(contacto => {
        console.log("identificacion: " + contacto.identificacion);
        console.log("Nombre: " + contacto.nombre);
        console.log("Telefono: " + contacto.telefono);
        console.log("Correo: " + contacto.correo);
        console.log("----------------------------------------")
    });
}

function EliminarCon(){
    console.clear();
    let identifica = prompt ("Igrese el numero de identificacion que desea elinimar: ")
    contactos.forEach((contacto, index) => {
        if (contacto.identificacion === identifica){
            console.log("identificacion: " + contacto.identificacion);
            console.log("Nombre: " + contacto.nombre);
            console.log("Telefono: " + contacto.telefono);
            console.log("Correo: " + contacto.correo);
            console.log("----------------------------------------")
            contactos.splice (index , 1)
        }
    })
    console.log("Contacto eliminado")
}

function menu(){ //Menu de todo
    let opcion = 0
    do{
        console.log("MENU CONTACTOS")
        console.log("1. Agregar contactos")
        console.log("2. Consultar contacto")
        console.log("3. listar contactos")
        console.log("4. Eliminar contactos")
        console.log("5. Exit")

        opcion = parseInt(prompt("Ingrese la opcion [1-5]: "))

        switch(opcion){
            case 1: 
                console.log("Crear")
                Agregarcon()
                break
            case 2: 
                console.log("Consultar")
                ConsultarIdent()
                break
            case 3: 
                console.log("Listar")
                ListarCon()
                break
            case 4: 
                console.log("Eliminar")
                EliminarCon()
                break
            case 5: 
                console.log("Vas a salir?")
                break
            default:
                console.log("Opcion fuera de rango")
            break
        }
        prompt("Presione enter para continuar...")
    }while(opcion!=5)
        
}

menu()