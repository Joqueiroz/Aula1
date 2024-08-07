const prompt = require('prompt-sync')();

let numero3 = parseFloat(prompt("Digite um valor:")) 

if (numero3 % 2 ===0){
    console.log("O numero",numero3,"é par")
}
else{
    console.log("O numero",numero3,"é impar")
}