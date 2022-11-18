
// // let variavel = 10/ 10


// // console.log(variavel)

// const numero = 0

// const numeroDivPor5 = (numero % 5) === 0; 

// console.log(numeroDivPor5);

// if (numero === 0) {
//     console.log("O numero é invalido")
// }
// else if (numeroDivPor5) {
//     console.log("Numero dividido por 5")
// }
// else {
//     console.log ('Numero Não é divisivel por 5.')
// }

// Aula 02 

// function IncrementarJuros(valor, percentualJuros){
//     const valorDeAcrescimo = (percentualJuros / 100) * valor
//     return valor + valorDeAcrescimo;
// }

// console.log(IncrementarJuros(100, 10));

// console.log(IncrementarJuros(100,15));

// function main(){
//     console.log ("Programa Principal")
// }

// main()

// function meuNome(Nome, Sobrenome){
//     Nome = "Luiz";
//     Sobrenome = "Jonathan";
//     console.log('Meu nome é ' + Nome, Sobrenome);
// }

// meuNome()

// function Idade (Idade){
//     Idade = 28;
    
//     if(Idade >= 18){
//         console.log('E eu tenho ' +Idade , 'anos e sou maior de IDADE');
//     } else{
//         console.log('E eu tenho ' +Idade , 'anos e sou menor de IDADE');
//     }
// }

// Idade();

// class Pessoa {
//     nome;
//     idade;
//     anoDeNascimento;

//     constructor(nome, idade){
//         this.nome = nome;
//         this.idade= idade;
//         this.anoDeNascimento = 2022 - idade;
//     }

    
//     descrever(){
//         console.log(`Meu nome é ${this.nome} e a minha idade é ${this.idade}`)   
//     }

// }

// const vitor = new Pessoa();
// vitor.nome = 'Vitor J';
// vitor.idade = 25;

// const Luiz = new Pessoa();
// Luiz.nome = "Luiz Jonathan"
// Luiz.idade = 28;

// console.log(Luiz);

// const Luiz = {
//     nome: "Luiz Jonathan",
//     idade: 28,

//     descrever: function(){
//         console.log(`Meu nome é ${this.nome} e a minha idade é ${this.idade}`)   
//     }
// }

// Luiz.sexo = "Masculino";

// console.log(Luiz.nome);

// console.log(Luiz.idade);

// console.log(Luiz);

// const notas = [];

// notas.push(5);
// notas.push(8);
// notas.push(3);
// notas.push(7);
// notas.push(9);

// let soma = 0; 

// for (let i = 0; i < notas.length; i++) {
//     const nota = notas[i];
//     soma = soma + nota;

// }

// const media = soma /notas.length;

// console.log(media);

