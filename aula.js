
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

function IncrementarJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) * valor
    return valor + valorDeAcrescimo;
}

console.log(IncrementarJuros(100, 10));

console.log(IncrementarJuros(100,15));