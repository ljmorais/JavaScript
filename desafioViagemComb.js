// Faça um programa para calcular o valor de uma viagem,

// Você terá 5 variasveis, sendo elas:

// 1 - Preço do etanol;
// 2 - Preço da Gasolina;
// 3 - O tipo do combustivel que está no seu carro;
// 4 - Gasto Medio de comb. do carro por KM;
// 5 - Distância em KM da viagem;

// Imprima no Console o valor que será pago para realizar está viagem.

const precoEtanol = 2.70;

const precoGasolina = 5.15;

const tipoCombustivel = "Gasolina";

const DistanciaViagem = 230;

const GastoMedioCarro = 11;

if (tipoCombustivel === "Etanol"){
    const valorTotalEtanol = (DistanciaViagem/GastoMedioCarro) * precoEtanol

    console.log(valorTotalEtanol.toFixed(2))
}
else if(tipoCombustivel === "Gasolina"){
    const valorTotalGasolina = (DistanciaViagem/GastoMedioCarro)*precoGasolina
    
    console.log(valorTotalGasolina.toFixed(2));
}
else {
    console.log ("Combustivel não reconhecido.")
}