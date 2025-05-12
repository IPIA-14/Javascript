let salar = 100000000
let salar1 = (salar * 1 / 100)
let salar2 = (salar * 3 / 100)
let salar3 = (salar * 5 / 100)
let salar4 = (salar * 7 / 100)
let salar5 = (salar * 10 / 100)

if (salar < 1000000){
    console.log ("Juan Tu impuesto corresponde a el 1%")
    console.log("Usted debe pagar un impuesto de: $" + salar1 + " Por tu salario de: $" + salar)
}else if(salar >= 1000000 & salar <2000000){
    console.log ("Juan Tu impuesto corresponde a el 3%")
    console.log("Usted debe pagar un impuesto de: $" + salar2 + " Por tu salario de: $" + salar)
}else if(salar >= 2000000 & salar <4000000){
    console.log ("Juan Tu impuesto corresponde a el 5%")
    console.log("Usted debe pagar un impuesto de: $" + salar3 + " Por tu salario de: $" + salar) 
}else if(salar >= 4000000 & salar <10000000){
    console.log ("Juan Tu impuesto corresponde a el 7%")
    console.log("Usted debe pagar un impuesto de: $" + salar4 + " Por tu salario de: $" + salar)
}else if(salar > 10000000){
    console.log ("Juan Tu impuesto corresponde a el 10%")
    console.log("Usted debe pagar un impuesto de: $" + salar5 + " Por tu salario de: $" + salar)
}