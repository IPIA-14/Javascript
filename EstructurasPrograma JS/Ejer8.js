console.log("Tablas de Multiplicar")
console.log("---------------");
console.log("Tabla del 5")
let i = 1

while (i <= 10){
    console.log("5 x " + i + " = " + (5 * i))
    i++
}

console.log("=============")

console.log("Tabla del 6")
let a = 1

while (a <= 10){
    console.log("6 x " + a + " = " + (6 * a))
    a++
}

console.log("=============")

console.log("Tabla del 7")
let b = 1

while (b <= 10){
    console.log("7 x " + b + " = " + (7 * b))
    b++
}

console.log("=============")

console.log("Tabla del 8")
let c = 1

while (c <= 10){
    console.log("8 x " + c + " = " + (8 * c))
    c++
}

console.log("=============")

console.log("Tabla del 8")
let d = 1

while (d <= 10){
    console.log("9 x " + d + " = " + (9 * d))
    d++
}

console.log("=============")

//Con for
console.log("Tablas de Multiplicar")
console.log("---------------");

for (let tabla = 5; tabla <= 9; tabla++){
    console.log("Tabla del " + tabla)

    for (let i = 1; i <=10; i++){
        console.log(tabla + " x " + i + " = " + (tabla * i));
    }

    console.log("---------------");

}
