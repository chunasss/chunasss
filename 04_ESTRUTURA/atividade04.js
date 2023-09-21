let idade, pessoas, soma = 0


for(let i = 1; i <=10; i++){
idade = Number(prompt("digite sua idade:"))
soma = soma + idade
}
document.write(`a soma dos valores foi ${soma}`)