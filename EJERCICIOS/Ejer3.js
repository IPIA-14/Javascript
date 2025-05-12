//Script para los dias de la semana

let dia=3
if (dia === 1){
    console.log("El dia de hoy es Lunes")
}else if (dia === 2){
    console.log("El dia de hoy es Martes")
}else if (dia === 3){
    console.log("El dia de hoy es Miercoles")
}else if (dia === 4){
    console.log("El dia de hoy es Jueves")
}else if (dia === 5){
    console.log("El dia de hoy es Vernes")
}else if (dia === 6){
    console.log("El dia de hoy es Sabado \nFin de semana!!")
}else if (dia === 7){
    console.log("El dia de hoy es Domigo \nFin de semana!!")
}else{
    console.log("ERROR!! El numero del dia ingresado esta fuera de rango")
}

// suitch

let diaa = 3;

switch (diaa) {
    case 1:
        console.log("El dia de hoy es Lunes");
        break;
    case 2:
        console.log("El dia de hoy es Martes");
        break;
    case 3:
        console.log("El dia de hoy es Miercoles");
        break;
    case 4:
        console.log("El dia de hoy es Jueves");
        break;
    case 5:
        console.log("El dia de hoy es Viernes");
        break;
    case 6:
        console.log("El dia de hoy es Sabado \nFin de semana!!");
        break;
    case 7:
        console.log("El dia de hoy es Domingo \nFin de semana!!");
        break;
    default:
        console.log("ERROR!! El numero del dia ingresado esta fuera de rango");
}