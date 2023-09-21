let salario = 100 , pecas = 0, operario, sexo, matricula, salario2 = 0, peca2 = 0, pecasTotais = 0, pecasAmais, salario1 = 0, contador = 0, pecasF = 0, pecasH = 0, contadorH = 0, contadorF = 0, MediaMasculino = 0, MediaFeminino = 0, pagamento = 0, pagamento1 = 0, pagamento2 = 0, salario3 = 0


for(let i = 1; i <=1; ++i){
matricula = Number(prompt("digite o codigo do operarario:"))
pecas = Number(prompt("digite o numero de peças:"))
sexo = Number (prompt("digite o sexo do operario:"))

pecasTotais = pecasTotais +pecas

if(pecas <20 || matricula == 1){
if(pecas >20){
pecasAmais = pecas -20
for(let i = 1 ; i<= pecasAmais; ++i){
salario1= salario * 0.03
salario2 = salario + salario1
}

document.write(`o operario ${matricula}<br> da classe 1 recebeu R$${salario1}`)
}
}
else{
    document.write(`o operario${matricula}<br>  da classe 1 recebeu R$${salario}`)
}



if(pecas >= 21 && pecas <= 30){
    salario1= salario * 0.03
    document.write(`o operario ${matricula}<br> da classe 2 recebeu R$${salario1}`)
}
if(sexo = "feminino"){
contadorF++
pecasF = pecasF +pecas
}
if(sexo = "masculino"){
contadorH++
 pecasH = pecasH +pecas
}
}
MediaMasculino = pecasH / contadorH
MediaFeminino  = pecasF / contadorF

pagamento = pagamento1  + salario3


document.write(`a media dos homens foi:${MediaMasculino}<br> o número de peças totais foram ${pecasTotais}<br> a media das mulheres foi de ${MediaFeminino}<br>`)

