function invertidoArr(arr) {
    let invertido = []

    for (let i = arr.length -1; i >= 0; i--) {
        invertido.push(arr[i])
    }
    return invertido
}
console.log(invertidoArr([1,2,3,4,5,6,7,8,9]))