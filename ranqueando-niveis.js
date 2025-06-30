let nome = "João"
let XP = 333 
let rank = "Ferro"

while (rank !== "Radiante") {
    switch (true) {
        case XP <= 1000:
            rank = "Ferro"
            break

        case XP >= 1001 && XP <= 2000:
            rank = "Bronze"
            break

        case XP >= 2001 && XP <= 5000:
            rank = "Prata"
            break

        case XP >= 5001 && XP <= 7000:
            rank = "Ouro"
            break

        case XP >= 7001 && XP <= 8000:
            rank = "Platina"
            break

        case XP >= 8001 && XP <= 9000:
            rank = "Ascendente"
            break

        case XP >= 9001 && XP <= 10000:
            rank = "Imortal"
            break

        case XP >= 10001:w
            rank = "Radiante"
            break
    }
    if (rank != "Radiante") {
        console.log("Administrador: Vejo que você está no rank " + rank + " lhe darei 1742 de XP para você, para você ter o total de " + (XP + 1742) + " de XP, até você chegar ao Radiante")
        XP += 1742
    }
}

console.log("O Herói de nome " + nome + " está no nível de " + rank)

// Diário de João Teixeira sobre o desafio de código:
// Comecei declarando três variáveis: nome, XP e rank.
// Inicialmente só iria fazer a checagem de ranks usando if e else, mas depois analisei o desafio e vi que precisava de laço de repetição.
// Comecei a testar diversas coisas a ponto de que fizesse sentido e não saisse de nada do que eu aprendi e estou proposto a saber usar.
// Assim então utilizei o laço de repetição while, que iria rodar enquanto o rank não fosse Radiante.
// Porquê? Pois usando somente o switch e cases, ele iria fechar o bloco de código através do break, e então iria encerrar.
// Então eu precisava de um laço de repetição para atingir os requisitos do desafio.
// A melhor forma que encontrei foi usando while, assim toda vez que o rank não fosse "Radiante" o switch continuaria rodando (sem fechar agora) e verificando o rank atual do "João"
// E enquanto não fosse radiante, o administrador daria 1742 de XP para o "João" e assim ele continuaria subindo de rank.
// Também escrevi exatamente a mensagem de saída solicitada pelo desafio.
