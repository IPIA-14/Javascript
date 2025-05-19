/*function areaCirculo(radio){
    return Math.PI * Math.pow(radio,2)
}

//let AreC = (radio) =>Math.PI * Math.pow(radio,2)

let area = areaCirculo(5);
console.log(area); */


/*Hacer una funcion que reciba como parametro un arreglo 
de numeros como resultados se debe devolver otro arreglo con 
los cuadrados los numeros */ 

let arreglo = [2,4,5,7,8];
console.log(arreglo);
let arr = [] // Arreglo vacio 

function cuadrado(arreglo){ //funcion cuadrada y llama al arreglo 
    for (let i = 0; i < arreglo.length; i ++){ //.length para ver el tamaño del arreglo y recorrer
        arr.push(arreglo [i]= arreglo[i]*arreglo[i]); // push para agregar al arreglo vacio los resultados
    }

    return arreglo //Para retonar y colocar los valores
}
    cuadrado(arreglo) // LLamar a la funcion
    console.log(arr)