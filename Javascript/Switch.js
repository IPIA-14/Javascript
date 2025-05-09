let mes = 12

switch(mes){
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
    case 1: console.log(31)
    break
    case 2: console.log(28)
    break
    case 9:
    case 6:
    case 11:
    case 3: console.log(30)
    break
    case 5: console.log("Mayo con 31 dias")
    break

    default: console.log("Error") // Eso es para cuando son varios Ejemplo dias del mes

}