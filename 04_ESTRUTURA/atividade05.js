let idade, contador = 0, numero


for(let i = 1; i <=3; i++){
    
idade = Number(prompt("digite sua idade:"))
if(idade >= 18)
contador++

}
document.write(`a media dos valores foi: ${contador}`)