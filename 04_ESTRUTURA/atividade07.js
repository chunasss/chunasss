let vetor1=[1,3,5,7] , vetor2= [2,4,6,8], vetor3 = [] 

for (let i = 0; i <= 8 ; i++) {
vetor3[i]= vetor1[i]   
i++  
vetor3[i]=vetor2[i-1]

}
 
for (let i = 0; i <= 8; i++) {
    document.write(vetor3[i])
    
}
