let salaryIn = prompt('Digite o seu salário: ');
let increseIn = prompt('Digite percentual de aumento: ');

// Troca virgula por ponto se necessário
let salaryComa = salaryIn.replace(/,/g, ".");
let increseComa = increseIn.replace(/,/g, ".");

// Transforma as variaveis em numero para evitar uma concatenação
let salaryVal = Number(salaryComa);
let salaryInc = Number(increseComa);

console.log('Salário atual: R$ ' + salaryVal);
console.log('Percentual de aumento: ' + salaryInc + '%');

salaryInc = (salaryInc / 100);

let increse = (salaryVal * salaryInc);
let finalSalary = (increse) + salaryVal;

// Ajusta para 2 casas decimais afinal é dinheiro
increse = parseFloat(increse).toFixed(2);
finalSalary = parseFloat(finalSalary).toFixed(2);

console.log('Seu aumento será de: R$ ' + increse);
console.log('Seu novo salário será de: R$ ' + finalSalary);

alert('Seu aumento será de: R$ ' + increse + '\ne seu novo salário será de: R$ ' + finalSalary);