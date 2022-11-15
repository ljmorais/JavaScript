/*
 - Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e escolha da condição de pagamento.

 Utilezie os códigos da tabela a seguir para ler qual é a condição de pagamento escolhida e efetuar o calculo adequado.

 Código Condição de pagamento:

 1 - A vista Debito, Recebe 10% de desconto;
 2 - A vista no Dinheiro e PIX, recebe 15% de desconto;
 3 - Em duas vezes, preco normal de etiqueta sem juros;
 4 - Acima de duas vezes. preco normal de etiqueta, mais juros de 10%
*/
function aplicarDesconto(valor,Desconto){
    return (valor - (valor * (Desconto/100)))
    
}
function aplicarJuros(valor,juros){
    return(valor + (valor * (juros/100)))
}

precoEtiqueta = 100;
formaDePagamento = 4;

if (formaDePagamento === 1){ 
    console.log(aplicarDesconto(precoEtiqueta, 10))
}
else if (formaDePagamento === 2){
    console.log(aplicarDesconto(precoEtiqueta, 15))
}
else if (formaDePagamento === 3){
    console.log(aplicarDesconto(precoEtiqueta))
} 
else if (formaDePagamento ===4 ) {
    console.log(aplicarJuros(precoEtiqueta, 10))
} else {
    console.log("Forma de pagamento não foi encontrado, por favor verificar a tabela novamente.")
}


