// Questão 6

/* 6. Escreva um programa que declare uma variável para armazenar um número inteiro e outra variável para armazenar um número decimal. 
   Em seguida, imprima o tipo de dado de cada variável.

*/

    let inteiro = parseInt(prompt("Digite um número inteiro:"));

    let decimal = parseFloat(prompt("Digite um número decimal:"));

    console.log(`O tipo da variável 'inteiro' é: ${typeof inteiro}`);

    console.log(`O tipo da variável 'decimal' é: ${typeof decimal}`);

