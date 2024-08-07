const prompt = require('prompt-sync')();

let lista = [];

let num = parseFloat(prompt("Quantos numeros serao inseridos na lista:"))

for(let i = 0; i < num; i++){
    let num = parseFloat(prompt("Quais numeros serao inseridos:"))
    lista.push(num)
}
console.log("Lista completa",lista)