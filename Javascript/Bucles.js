// tipos Whilw, for, do..while, for..in, for..of
console.log(1)

//for (let index = 0; index < array.length; index++) {
    //const element = array[index];}

//for (valorinicual, condicion, increlemto)
    //lo que se repite

for (let i=1; i<=10; i=i+1){ //i++
    console.log(i)
}   //Inrementa lo qie se pide osea llegar hasta 100

for (let i=2; i<=40; i=i+2){
    console.log(i)
}
for (let i=1; i<=20; i=i+1){
    console.log(i*2)
}

z = 1 //Mientrs se cumpla hacer
while(z<=20){
    console.log(z*2)
    z=z+1
}

z = 1 // Haga mientras se cumple
do{
    console.log(z*2)
    z=z+1
}while(z<=40)

for (let i=1; i<=10; i++){ //Impares cambiar console y continuo para imprimir pares
    if (i%2 === 1){
       console.log(i)
    }
     continue
}

x=10
while (x<=10){
    console.log(x)
    x++
    if (x === 7)break
}

for (let i=10; i>=1; i--){
    console.log(i)
}