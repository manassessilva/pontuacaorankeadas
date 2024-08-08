let vitorias = prompt("Insira a quantidade de vitórias: ")
let derrotas = prompt("Insira a quantidade de derrotas: ")
let rank = pontuacao(vitorias, derrotas)

if(rank < 10) {
    console.log("O herói tem o saldo de " + rank + " pontos. Está no nível Ferro")
}
else if((rank > 11) && (rank < 20)) {
    console.log("O herói tem o saldo de " + rank + " pontos. Está no nível Bronze")
}
else if((rank > 21) && (rank < 50)) {
    console.log("O herói tem o saldo de " + rank + " pontos. Está no nível Prata")
}
else if((rank > 51) && (rank < 80)) {
    console.log("O herói tem o saldo de " + rank + " pontos. Está no nível Ouro")
}
else if((rank > 81) && (rank < 90)) {
    console.log("O herói tem o saldo de " + rank + " pontos. Está no nível Diamante")
}
else if((rank > 91) && (rank < 100)) {
    console.log("O herói tem o saldo de " + rank + " pontos. Está no nível Lendário")
}
else if(rank > 101) {
    console.log("O herói tem o saldo de " + rank + " pontos. Está no nível Imotarl")
}
else {
    console.log("Digite uma pontuação válida.")
}

function pontuacao(vitorias, derrotas) {
    let resultado = vitorias - derrotas;
    return resultado
}