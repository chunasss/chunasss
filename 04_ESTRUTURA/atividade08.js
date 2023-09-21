// Função para preencher o vetor com 8 números inteiros aleatórios entre -50 e 50
function preencherVetor() {
    const vetor = [];
    for (let i = 0; i < 8; i++) {
      const numero = Math.floor(Math.random() * 101) - 50; // Números entre -50 e 50
      vetor.push(numero);
    }
    return vetor;
  }
  

  function separarPositivosENegativos(vetor) {
    const positivos = [];
    const negativos = [];
  
    for (let i = 0; i < vetor.length; i++) {
      if (vetor[i] >= 0) {
        positivos.push(vetor[i]);
      } else {
        negativos.push(vetor[i]);
      }
    }
  
    return { positivos, negativos };
  }
  
 
  function exibirResultados(positivos, negativos) {
    document.write("Vetor de números positivos: " + positivos.join(", ") + "<br>");
    document.write("Vetor de números negativos: " + negativos.join(", "));
  }
  
  
  const vetorOriginal = preencherVetor();
  
  
  const { positivos, negativos } = separarPositivosENegativos(vetorOriginal);
  
  
  exibirResultados(positivos, negativos);
  