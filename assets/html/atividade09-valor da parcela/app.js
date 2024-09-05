const formMain = document.getElementById('form-main');
formMain.addEventListener('submit', function(event) {
    console.log ('html acess success');
    
// evita o comportamento padrão do evento submit
event.preventDefault(); 
    console.log ('prevent defaul action: success');
 
// pega o valor como string
let inputValue = document.getElementById('input-part').value;

// Troca virgula por ponto se necessário
let inputComa = inputValue.replace(/,/g, ".");
    console.log ('coma adjustment: success');

// transforma em número
let input = Number(inputComa);
    console.log ('normalize number: success');

// calcula o resultado
let resultFinal = input / 4;
    console.log ('calculate installment: success');

// imprime no console
console.log('O valor da do produto é: ' + input);
console.log('O valor da parcela é: ' + resultFinal);

// exibe os resultados
document.getElementById('final-result').classList.remove('is-hidden');

document.getElementById('final-result').scrollIntoView({
    behavior: 'smooth', // Faz a rolagem ser suave
    block: 'start' // Alinha o elemento ao topo da janela de visualização
});

// manda o valor para interface
document.getElementById('div-text-result').innerHTML = ('R$ '+input.toFixed(2));
    
document.getElementById('div-text-result-2').innerHTML = ('R$ '+resultFinal.toFixed(2));
    console.log ('print result on html: success');
});