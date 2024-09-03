let varHour = prompt('Vamos converter as horas de trabalho para minutos. \nDigite o tempo trabalhado em horas (ex: 7,5): ');

// Troca virgulas por pontos só por garantia
let hourComa = varHour.replace(/,/g, ".");

// Transforma as variaveis em numero para evitar uma concatenação
let hourNum = Number(hourComa);

// transforma o horas em minutos
let varMinute = hourNum * 60;

console.log('Horas digitadas ' + hourNum);
console.log( hourNum +' horas corresponde a ' + varMinute + ' minutos');

alert(hourNum +' horas corresponde a ' + varMinute + ' minutos');