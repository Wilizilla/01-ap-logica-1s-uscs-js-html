let num = prompt('Digite um número: ');

// Transforma as variaveis em numero para evitar uma concatenação
num = Number(num);

// Calcula o dobro do número
numDouble = (num * 2 );

console.log('O número digitado foi: ' + num);
console.log('O dobro do número foi: ' + numDouble);

alert('O dobro de ' + num + ' é: ' + numDouble);