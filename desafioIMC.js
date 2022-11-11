// Elabore um algoritimo que dado o peso e a altura de um adulto ele apresente sua condição de acordo com o IMC.

// IMC em adultos condição:

// - Abaixo de 18.5 abaixo do peso;
// - Entre 18.5 e 25 Peso Normal;
// - Entre 25 e 30 Acima do peso;
// - Entre 30 e 40 Obeso;
// - Acima de 40 Obesidade Grave;

// Formula do IMC:

// IMC = Peso / (Altura x Altura);

const Peso = 91

const Altura = 1.74

const IMC = Peso / (Altura * Altura);

console.log(IMC);

if (IMC < 18.5){
    console.log("Você se encontra Abaixo do peso");
} else if (IMC >= 18.5 && IMC < 25){
    console.log("Você se encontra no peso Normal");
} else if (IMC >=25 && IMC < 30){
    console.log("Você se encontra acima do peso")
} else if (IMC >= 30 && IMC <= 40){
    console.log("Você se encontra OBESO")
} else {
    console.log("Você se encontra em obesidade Grave.")
}