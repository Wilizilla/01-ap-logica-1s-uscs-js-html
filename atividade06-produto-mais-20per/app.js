let valueProd = prompt('Vamos calcular o acrécimo de 20% no produto. \nDigite o preço do produto: ');

// Troca virgula por ponto
let valueComa = valueProd.replace(/,/g, ".");

// Transforma as variaveis em número para evitar uma concatenação errada
let valueNum = Number(valueComa);

// Ajusta para 2 casas decimais
let valueDec = parseFloat(valueNum).toFixed(2);

let finalValue = (valueNum * 0.2) + valueNum;

// Ajusta o valor final para 2 casas decimais
finalValue = parseFloat(finalValue).toFixed(2);

console.log('O preço digitado foi: ' + valueDec);
console.log('O valor final (+ 20%) é: ' + finalValue);

alert('O preço digitado foi: R$ ' + valueDec +'\nO valor final (+ 20%) é: R$ ' + finalValue );