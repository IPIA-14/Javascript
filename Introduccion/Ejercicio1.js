alert("A continuacion ingresa el valor de los siguientes en numeros")
let producto = parseInt(prompt("Ingrese el valor del producto:  "));
let iva = parseInt(prompt("Ingrese el porcentaje del iva(%)"));

if (isNaN(producto) || isNaN(iva)){
    alert(" Error!! Ingresa valores numericos validos")
}else{
    let valor_iva = (producto * iva / 100)
    let pagar = (valor_iva + producto);
    alert ("\n El precio total a pagar es de: $" + pagar +" \n Usted pagara por el producto sin iva un total de: $"+producto  +" \n Usted pagara por el iva un total de: $" + valor_iva)
    
}

