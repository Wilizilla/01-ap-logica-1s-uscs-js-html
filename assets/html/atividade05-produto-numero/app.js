const formMain = document.getElementById('form-main');
formMain.addEventListener('submit', function(event) {
    console.log ('html access success');
    
// evita o comportamento padrão do evento submit
event.preventDefault(); 
    console.log ('prevent default action: success');
 
// pega o valor como string
let num01 = document.getElementById('input-salary').value;
let num02 = document.getElementById('input-increase').value;

// Troca virgula por ponto se necessário
let num01Coma = num01.replace(/,/g, ".");
let num02Coma = num02.replace(/,/g, ".");
    console.log ('coma adjustment: success');

// transforma em número
let number01 = Number(num01Coma);
let number02 = Number(num02Coma);
    console.log ('normalize number: success');

// calcula o resultado

let resultFinal = number01 * number02;
    console.log ('calculate area: success');

// imprime no console
console.log('O primeiro número digitado foi: ' + number01);
console.log('O segundo número digitado foi: ' + number02);

// exibe o box de resposta
document.getElementById('final-result').classList.remove('is-hidden');

document.getElementById('final-result').scrollIntoView({
    behavior: 'smooth', // Faz a rolagem ser suave
    block: 'start' // Alinha o elemento ao topo da janela de visualização
});

// manda o valor para interface
document.getElementById('div-text-result').innerHTML = (resultFinal.toFixed(2).replace(/\.00$/, ''));
    console.log ('print result on html: success');
});