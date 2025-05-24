function duplicados(arr) {
    let sinDuplicar = [arr[0]]
    for (let i = 0; i < arr.length; i++) {
      let existe = true
        for (let j = 0; j < sinDuplicar.length; j++) {
            if (arr[i] == sinDuplicar[j]) {
                existe = false
            }
        }
        if (existe){
          sinDuplicar.push(arr[i])
        }
    }
    return sinDuplicar
}
console.log(duplicados([1,2,2,4,5,6,1,6,9,3]))