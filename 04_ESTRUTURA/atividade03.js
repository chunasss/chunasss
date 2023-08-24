
let num, fatorial=1


num = Number(prompt("insira um número:"))
for (let cont = 1; cont <= num ; cont++) {
  
    fatorial = fatorial * cont
   document.write(`${cont} x = ${fatorial}<br>`)
}
 alert(fatorial)






