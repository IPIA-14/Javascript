function sumaArreglo(arr) {
    let mayor = -Infinity

    for (let i = 0; i < arr.length; i ++){
        if (arr[i] > mayor){
            mayor = arr[i]
        }
    }
    
    return mayor
}
console.log(sumaArreglo([2,3,6,8,9,10,23]))