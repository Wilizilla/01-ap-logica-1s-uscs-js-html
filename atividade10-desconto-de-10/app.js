let valueProd = prompt('Vamos calcular o desconto de 10% no produto. \nDigite o preço do produto: ');

// Troca virgula por ponto
let valueComa = valueProd.replace(/,/g, ".");

// Transforma as variaveis em número para evitar uma concatenação errada
let valueNum = Number(valueComa);

// Ajusta para 2 casas decimais
let valueDec = parseFloat(valueNum).toFixed(2);

let finalValue = valueNum - (valueNum * 0.2);

// Ajusta o valor final para 2 casas decimais
finalValue = parseFloat(finalValue).toFixed(2);

console.log('O preço digitado foi: R$' + valueDec);
console.log('O valor final (- 20%) é: R$' + finalValue);

alert('O preço digitado foi: R$ ' + valueDec +'\nO valor final (+ 20%) é: R$ ' + finalValue );