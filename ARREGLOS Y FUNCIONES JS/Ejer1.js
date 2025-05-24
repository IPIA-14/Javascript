const prompt = require("prompt-sync")()

function mejorValor(min, max) {
    let zMejor = 0, xMayor = 0, yMayor = 0
    for (let index = 0; index < 100; index++) {
        let x = Math.floor(Math.random() * (max - min + 1)) + min;
        let y = Math.floor(Math.random() * (max - min + 1)) + min;
        let z = (x * x + y * y);
        if (z > zMejor){
            zMejor = z
            xMayor = x
            yMayor = y
        }
    }
    return (`Z = X² + Y² = ${zMejor} = ${xMayor}² + ${yMayor}²`)
}