let nota =[], gabarito= [] ,aluno = [], i = 0, notas = 0, total = 0, taxa, aprovacao = 0
for (let n = 1; n<3; n++) {
  
gabarito[i] = (prompt("digite a resposta da "+n +" questao "))
}

for(let n = 1;n<=3; n++){
total =  total + 1
aluno[i] = Number (prompt("digite o RA do aluno"))
notas = 0

for(let n  = 1; n<3; n++) {
nota[i] =  prompt("digite a resposta da "+n+" questao")
if(nota[i]=== gabarito[i]){
    notas = notas +1
}
}
if(notas >=2){
    aprovacao = aprovacao +1
}
document.write(`o aluno ${aluno}tirou a nota ${notas}<BR>`)
}
taxa = (aprovacao * 100) / total
document.write(`taxa de aprovaçao: ${taxa}`)