const formMain = document.getElementById('form-main');
formMain.addEventListener('submit', function(event) {
    console.log ('html acess success');
    
// evita o comportamento padrão do evento submit
event.preventDefault(); 
    console.log ('prevent defaul action: success');
 
// pega o valor como string
let inputNum = document.getElementById('input-num').value;

// Troca virgula por ponto se necessário
let inputComa = inputNum.replace(/,/g, ".");
    console.log ('coma adjustment: success');

// transforma em número
let valueNum = Number(inputComa);
    console.log ('normalize number: success');

// salva o valor em uma constante
const resultFinal = valueNum;
    console.log ('calculate: success');

//
let resultAdd = ++valueNum;
    console.log ('calculate add: success');

    valueNum = resultFinal

let resultSub = --valueNum;
    console.log ('calculate subtract: success');


// imprime no console
console.log('O valor digitado foi ' + resultFinal);
console.log('O valor anterior é ' + resultAdd);
console.log('O valor posterior é ' + resultSub);

// manda o valor para interface
document.getElementById('final-result').classList.remove('is-hidden');

document.getElementById('final-result').scrollIntoView({
    behavior: 'smooth', // Faz a rolagem ser suave
    block: 'start' // Alinha o elemento ao topo da janela de visualização
});

// manda o valor para interface
document.getElementById('div-text-result').innerHTML = (resultFinal.toFixed(2).replace(/\.00$/, ''));
    console.log ('print result on html: success');
    
document.getElementById('div-text-result-2').innerHTML = (resultAdd.toFixed(2).replace(/\.00$/, ''));
    console.log ('print result on html: success');

document.getElementById('div-text-result-3').innerHTML = (resultSub.toFixed(2).replace(/\.00$/, ''));
    console.log ('print result on html: success');
});