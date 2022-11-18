/*

Uma sala contem 5 alunos e para cada aluno sorteado um numero de 1 - 100.

Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.

Dados de entrada:
5
50
10
98
23

Saida:
98


*/


const {gets, print} = require ('./funcoes-Auxiliares');

const quantidadeDeAlunos = gets();
let maiorValor = 0;

for (let i = 0; i < quantidadeDeAlunos ; i++) {
    const numerosSorteado = gets();
    if (numerosSorteado > maiorValor) {
        maiorValor = numerosSorteado;
    }
    
}

print(maiorValor);


/*

Uma sala contem 5 alunos e para cada aluno sorteado um numero de 1 - 100.

Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.

Dados de entrada:
5
50
10
98
23

Saida:
98


*/

