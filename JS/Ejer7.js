let numero = 4;

if(numero<=1){
    console.log("El numero (" + numero +") no es un numero primo")
}else{
    let s = 2
    let Primo = true

    while (s <= numero / 2){
        if(numero % 2 === 0){
            Primo = false;
            break
        }
        s++
    } 
    if(Primo){
        console.log("El número (" + numero + ") es un número primo")
    }else{
        console.log("El número (" + numero + ") no es un número primo")
    }
}