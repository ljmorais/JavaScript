/*

Crie uma pessao para representar pessoas.
Para cada pessoa teremos os atributos nomes, pesos e alturas.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = PESO / (ALTURA * ALTURA));
Instancie uma pessoa chamada José tenha 70 kg de peso e 1,75 de altura e peça para josé dizer o seu valor do IMC;

*/

class Pessoa{
    nome;
    peso;
    altura;
 

    constructor (nome, peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
             
    }
    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }
    
    classficarImc(){
        const imc = this.calcularImc();
        if (imc < 18.5){
            return 'Você se encontra Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25){
            return "Você se encontra no peso Normal";
        } else if (imc >=25 && imc < 30){
            return "Você se encontra acima do peso";
        } else if (imc >= 30 && imc <= 40){
            return "Você se encontra OBESO";
        } else {
            return "Você se encontra em obesidade Grave."
        }
    }


}

const jose = new Pessoa("José", 70 , 1.75);

console.log(jose);

console.log(`Meu nome é ${jose.nome} e o meu IMC é ${jose.Imc}`)

console.log(jose.classficarImc())
