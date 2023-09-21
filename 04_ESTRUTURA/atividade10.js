let nota1 , nota2, nota3 , n = 1, escolha , mediaP, mediaA

nota1=Number(prompt("insira uma nota"))
nota2=Number(prompt("insira uma nota"))
nota3=Number(prompt("insira uma nota"))

escolha = prompt("digite A para media aritmetica ou P para ponderada")

function mediaAritmetica(){
if(escolha ==='A'){
    mediaA =(nota1 + nota2 + nota3)/3
   return mediaA

}
if(escolha === 'P'){
mediaP =((nota1*5)+(nota2*3)+(nota3*2))/10

return mediaP

}}
mediaAritmetica()



