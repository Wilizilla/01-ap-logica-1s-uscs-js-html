const formMain = document.getElementById('form-main');
formMain.addEventListener('submit', function(event) {
    console.log ('html access success');
    
// evita o comportamento padrão do evento submit
event.preventDefault(); 
    console.log ('prevent default action: success');
 
// pega o valor como string
let hoursValue = document.getElementById('input-hours').value;

// Troca virgula por ponto se necessário
let hoursComa = hoursValue.replace(/,/g, ".");
    console.log ('coma adjustment: success');

// transforma em número
let hours = Number(hoursComa);
    console.log ('normalize number: success');

// calcula o resultado
let resultFinal = hours * 60;
    console.log ('transform hours in minutes: success');

// imprime no console
console.log('o valor digitado foi: ' + hours);


// manda o valor para interface
document.getElementById('final-result').classList.remove('is-hidden');

document.getElementById('final-result').scrollIntoView({
    behavior: 'smooth', // Faz a rolagem ser suave
    block: 'start' // Alinha o elemento ao topo da janela de visualização
});

// manda o valor para interface
document.getElementById('div-text-result-2').innerHTML = (hours.toFixed(2));

document.getElementById('div-text-result').innerHTML = (resultFinal.toFixed(2));
    console.log ('print result on html: success');
});