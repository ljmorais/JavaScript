// Faça um algoritimo que dado as 03 notas tiradas por um alumo em um semestre da faculdade sua media é a sua classificação, conforme a tabela abaixo:

// Média = (nota1 + nota2 + nota3) / 3

// Classificação:
//  - Media Menor que 5 , Reprovação;
//  - Media entre 5 e 7 , Recuperação;
//  - Media acima de 7 , Aprovação no semestre;

const nota1 = 3

const nota2 = 9

const nota3 = 6

mediaTotal = (nota1 + nota2 + nota3) / 3;

console.log(mediaTotal);

if(mediaTotal < 5){
    console.log("Aluno se encontra reprovado no semestre");
}

else if (mediaTotal >= 5 && mediaTotal <= 7) {
    console.log("Aluno se encontra de recuperação")
}
else {
    console.log("Aluno foi APROVADO, passou de semestre.")
}

