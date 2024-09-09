const formMain = document.getElementById('form-main');
formMain.addEventListener('submit', function(event) {
    console.log ('html acess success');
    
// evita o comportamento padrão do evento submit
event.preventDefault(); 
    console.log ('prevent defaul action: success');
 
// pega o valor como string
let valueSalary = document.getElementById('input-salary').value;
let valueIncrease = document.getElementById('input-increase').value;

// Troca virgula por ponto se necessário
let salaryComa = valueSalary.replace(/,/g, ".");
let increaseComa = valueIncrease.replace(/,/g, ".");
    console.log ('coma adjustment: success');

// transforma em número
let salary = Number(salaryComa);
let increase = Number(increaseComa/100);
    console.log ('normalize number: success');

// calcula o resultado

let percIncrease = salary*(increase);

let resultFinal = salary + percIncrease;
    console.log ('calculate area: success');

// imprime no console
console.log('O salário digitado foi: ' + salary);
console.log('O aumento digitado foi: ' + increaseComa);
console.log('O aumento foi de: ' + percIncrease);
console.log('O salário final é: ' + resultFinal);

// manda o valor para interface
document.getElementById('final-result').classList.remove('is-hidden');

document.getElementById('final-result').scrollIntoView({
    behavior: 'smooth', // Faz a rolagem ser suave
    block: 'start' // Alinha o elemento ao topo da janela de visualização
});

// manda o valor para interface
document.getElementById('div-text-result').innerHTML = ('R$ '+resultFinal.toFixed(2));
    console.log ('print result on html: success');
    
document.getElementById('div-text-result-2').innerHTML = ('R$ '+percIncrease.toFixed(2));
    console.log ('print result on html: success');
});