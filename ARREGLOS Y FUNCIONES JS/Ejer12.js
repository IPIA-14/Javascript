function valorIndex(arr, valor) {
    let posicion = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === valor) {
            posicion = i
        }
    }
    return posicion
}
console.log(valorIndex(["Juan", "Piolin", "Jose", "Dylan"]))