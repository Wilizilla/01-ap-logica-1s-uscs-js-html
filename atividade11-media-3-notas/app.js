let grade01 = prompt('Vamos calcular o desconto de 10% no produto. \nDigite a primeira nota: ');
let grade02 = prompt('Digite a segunda nota: ');
let grade03 = prompt('Digite a terceira nota: ');

// Troca virgula por ponto
grade01 = grade01.replace(/,/g, ".");
grade02 = grade02.replace(/,/g, ".");
grade03 = grade03.replace(/,/g, ".");

// Transforma as variaveis em número para evitar uma concatenação errada
let grade01Coma = Number(grade01);
let grade02Coma = Number(grade02);
let grade03Coma = Number(grade03);

// Ajusta o valor final para 2 casas decimais
finalValue = (grade01Coma + grade02Coma + grade03Coma) / 3;

console.log('O primeiro valor digitado foi ' + grade01Coma);
console.log('O segundo valor digitado foi ' + grade02Coma);
console.log('O terceiro valor digitado foi ' + grade03Coma);
console.log('A média é: ' + finalValue);

alert('A média entre ' + finalValue );