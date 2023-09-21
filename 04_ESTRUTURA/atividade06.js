let produto;

const produtos = []
do{
 produto = prompt("digite os iteis da feira:")
 produtos.push(produto)
}while(produto === "SAIR")
document.write(produto)