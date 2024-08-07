const prompt = require('prompt-sync')();

let numero3 = parseFloat(prompt("Digite a nota do aluno:")) 

if(numero3 >= 6 && numero3 <11){
    console.log('O aluno foi aprovado')
}
else {
    if(numero3 >=0 && numero3 <4){
    console.log("O aluno foi reprovado")
}
else{
    if(numero3 >=4 && numero3 <6)
    console.log('O aluno esta de recuperação')
}
}