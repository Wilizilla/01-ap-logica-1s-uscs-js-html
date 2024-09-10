const formMain = document.getElementById('form-main');
formMain.addEventListener('submit', function(event) {
    console.log ('html access success');
    
// evita o comportamento padrão do evento submit
event.preventDefault(); 
    console.log ('prevent default action: success');
 
// pega o valor como string
let valueSalary = document.getElementById('input-value').value;

// Troca virgula por ponto se necessário
let inutValueComa = valueSalary.replace(/,/g, ".");

// transforma em número
let value = Number(inutValueComa);

// calcula o resultado

let perc20 = value * 0.2

let resultFinal = value + perc20;
    console.log ('calculate final value: success');

// imprime no console
console.log('O aumento foi de R$' + perc20);
console.log('O valor final do produto é R$' + resultFinal);

// manda o valor para interface
document.getElementById('final-result').classList.remove('is-hidden');

document.getElementById('final-result').scrollIntoView({
    behavior: 'smooth', // Faz a rolagem ser suave
    block: 'start' // Alinha o elemento ao topo da janela de visualização
});

// manda o valor para interface
document.getElementById('div-text-result-2').innerHTML = ('R$ '+perc20.toFixed(2));
    
document.getElementById('div-text-result').innerHTML = ('R$ '+resultFinal.toFixed(2));
    console.log ('print result on html: success');
    
});