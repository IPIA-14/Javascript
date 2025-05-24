function promedioArr(arr) {
    let promedio = 0
    let suma = 0
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i]
    }
    promedio = suma / arr.length 
    return promedio 
}
console.log(promedioArr([1,2,3,4,5,6,7,8,9]))