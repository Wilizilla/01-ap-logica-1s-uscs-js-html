let varNum = prompt('Vamos verificar os valores anteriores e posteriores de um numero. \nDigite um número: ');

// Troca virgulas por pontos só por garantia
varNum = varNum.replace(/,/g, ".");

// armazena o valor original em uma nova constante
const numBackup = varNum;

// realiza as operações usando ++ e --, mas seria mais fácil adiconar e subtrair 1
let varNumAdd = ++varNum;
let varNumSub = numBackup;
varNumSub = --varNumSub;

console.log('O numero digitado foi: ' + numBackup);
console.log('O numero anterior é: ' + varNumSub);
console.log('O numero posterior é: ' + varNumAdd);

alert('O numero digitado foi: ' + numBackup + '\nO numero anterior é : ' + varNumSub + '\ne o numero posterior é: ' + varNumAdd);