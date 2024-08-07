const prompt = require('prompt-sync')();

let celsius = parseFloat(prompt("Digite um valor para Celsius:")) 

const fahren =(celsius * 9/5)+32

console.log("O valor em fahrenheit é",fahren)