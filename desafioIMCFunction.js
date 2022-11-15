// Elabore um algoritimo que dado o peso e a altura de um adulto ele apresente sua condição de acordo com o IMC.

// IMC em adultos condição:

// - Abaixo de 18.5 abaixo do peso;
// - Entre 18.5 e 25 Peso Normal;
// - Entre 25 e 30 Acima do peso;
// - Entre 30 e 40 Obeso;
// - Acima de 40 Obesidade Grave;

// Formula do IMC:

// IMC = Peso / (Altura x Altura);

function calcularImc(peso, altura){
    peso/ Math.pow(altura, 2)
}

function classificarImc(IMC){
    if (IMC < 18.5){
        return 'Você se encontra Abaixo do peso';
    } else if (IMC >= 18.5 && IMC < 25){
        return "Você se encontra no peso Normal";
    } else if (IMC >=25 && IMC < 30){
        return "Você se encontra acima do peso";
    } else if (IMC >= 30 && IMC <= 40){
       return "Você se encontra OBESO";
    } else {
        return "Você se encontra em obesidade Grave."
    }
}

function main(){
    const peso = 75;
    const altura = 1.75;
    
    const IMC = calcularImc(peso,altura);
    console.log(classificarImc(IMC));
}

main()

