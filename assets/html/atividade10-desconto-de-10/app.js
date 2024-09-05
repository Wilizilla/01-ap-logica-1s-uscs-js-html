const formMain = document.getElementById('form-main');
formMain.addEventListener('submit', function(event) {
    console.log ('html acess success');
    
// evita o comportamento padrão do evento submit
event.preventDefault(); 
    console.log ('prevent defaul action: success');
 
// pega o valor como string
let inputValue = document.getElementById('input-value').value;

// Troca virgula por ponto se necessário
let inputComa = inputValue.replace(/,/g, ".");
    console.log ('coma adjustment: success');

// transforma em número
let percNum = Number(inputComa * 0.1);
    console.log ('normalize number: success');

// calcula o resultado
let resultFinal = inputComa - percNum;
    console.log ('calculate area: success');

// imprime no console
console.log('O valor original é: ' + inputComa);
console.log('O valor com desconto é: ' + resultFinal);

// manda o valor para interface
document.getElementById('final-result').classList.remove('is-hidden');

document.getElementById('final-result').scrollIntoView({
    behavior: 'smooth', // Faz a rolagem ser suave
    block: 'start' // Alinha o elemento ao topo da janela de visualização
});

// manda o valor para interface
document.getElementById('div-text-result').innerHTML = ('R$ ' + percNum.toFixed(2));
    console.log ('print result on html: success');
    
document.getElementById('div-text-result-2').innerHTML = ('R$ ' + resultFinal.toFixed(2));
    console.log ('print result on html: success');
});