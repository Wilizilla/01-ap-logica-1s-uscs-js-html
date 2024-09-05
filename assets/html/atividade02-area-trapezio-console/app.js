const formMain = document.getElementById('form-main');
formMain.addEventListener('submit', function(event) {
    console.log ('html acess success');
    
// evita o comportamento padrão do evento submit
event.preventDefault(); 
    console.log ('prevent defaul action: success');
 
// pega o valor como string
let valueB1 = document.getElementById('input-b1').value;
let valueB2 = document.getElementById('input-b2').value;
let valueH = document.getElementById('input-h').value;

// Troca virgula por ponto se necessário
let b1Coma = valueB1.replace(/,/g, ".");
let b2Coma = valueB2.replace(/,/g, ".");
let hComa = valueH.replace(/,/g, ".");

// transforma em número
let b1Side = Number(b1Coma);
let b2Side = Number(b2Coma);
let hHeight = Number(hComa);
    console.log ('normalize number: success');

// calcula a área
let resultFinal = ((b1Side + b2Side)/2)*hHeight;
    console.log ('calculate area: success');

// imprime no console
console.log('O  primeiro valor (B) digitado foi: ' + b1Side+ ' cm');
console.log('O  segundo valor (b) digitado foi: ' + b2Side+ ' cm');
console.log('O  terceiro valor (h) digitado foi: ' + hHeight+ ' cm');

// manda o valor para interface
document.getElementById('final-result').classList.remove('is-hidden');

document.getElementById('final-result').scrollIntoView({
    behavior: 'smooth', // Faz a rolagem ser suave
    block: 'start' // Alinha o elemento ao topo da janela de visualização
});

// manda o valor para interface
document.getElementById('div-text-result').innerHTML = resultFinal.toFixed(2) + ' cm²';
    console.log ('print result on html: success');

});