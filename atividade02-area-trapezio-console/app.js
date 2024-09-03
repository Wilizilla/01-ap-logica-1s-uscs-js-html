let biggerSide = prompt('Vamos calcular a área de um trapézio.\nDigite o valor da base do trapézio em cm: ');
let smallSide = prompt('Digite o valor do topo do trapézio em cm: ');
let heightTrap = prompt('Digite a altura do trapézio em cm: ');

// Transforma as variaveis em numero para evitar uma concatenação
biggerSide = Number(biggerSide);
smallSide = Number(smallSide);
heightTrap = Number(heightTrap);

console.log('Maior Base: ' + biggerSide);
console.log('Menor base: ' + smallSide);
console.log('Altura: ' + heightTrap);

// formula A = ((B+b)*h)/2
let trapezoidArea = ((biggerSide + smallSide)*heightTrap)/2; 

console.log('A área do trapézio é de: ' + trapezoidArea + ' cm²');
console.log('ou: ' + (trapezoidArea / 100) + ' m²');

alert('A área do trapézio é de: ' + trapezoidArea + ' cm². \nou: ' + (trapezoidArea / 100) + ' m².' );