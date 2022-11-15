/* 
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um  gasto medio de combustivel por kilometro rodado.
Crie um metodo que o dado de quantidade de quilometros e o preço do combustivel nos de o valor gasto em reais para realizar o percurso.

*/

class Carros{
    marca;
    cor;
    gastoMedioPorKm;
    
    constructor(marca,cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    
    calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel
    }
}

const Palio = new Carros("Fiat", "Prata", 1/12);

console.log(Palio);

console.log(Palio.calcularGastoDePercurso(70, 5,00))

const Uno = new Carros("Fiat","Preto", 1/10);

console.log(Uno.calcularGastoDePercurso(70,5,00));