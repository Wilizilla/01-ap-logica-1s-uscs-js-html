let varNum = prompt('Vamos verificar o valor das parcelas. \nDigite o valor do produto: ');

// Troca virgulas por pontos só por garantia
varNum = varNum.replace(/,/g, ".");
varNum = Number(varNum);

// realiza as operações usando ++ e --, mas seria mais fácil adiconar e subtrair 1
let varAdj = (varNum / 4);

console.log('O valor digitado foi: ' + varNum);
console.log('O valor das parcelas e:  ' + varAdj);

alert('O numero digitado foi: R$' + varNum + '\ne o valor da parcela é: R$' + varAdj + ' (1/4)');