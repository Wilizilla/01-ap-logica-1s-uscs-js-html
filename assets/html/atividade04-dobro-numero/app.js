const formMain = document.getElementById('form-main');
formMain.addEventListener('submit', function(event) {
    console.log ('html acess success');
    
// evita o comportamento padrão do evento submit
event.preventDefault(); 
    console.log ('prevent defaul action: success');
 
// pega o valor como string
let num = document.getElementById('input-number').value;

// Troca virgula por ponto se necessário
let numComa = num.replace(/,/g, ".");
    console.log ('coma adjustment: success');

// transforma em número
let numVar = Number(numComa);
    console.log ('normalize number: success');

// calcula o resultado

let resultFinal = numVar * 2;
    console.log ('calculate area: success');

// imprime no console
console.log('O numero digitado foi: ' + numVar);
console.log('O salário final é: ' + resultFinal);

// manda o valor para interface
document.getElementById('final-result').classList.remove('is-hidden');

document.getElementById('final-result').scrollIntoView({
    behavior: 'smooth', // Faz a rolagem ser suave
    block: 'start' // Alinha o elemento ao topo da janela de visualização
});

// manda o valor para interface
document.getElementById('div-text-result-2').innerHTML = (numVar.toFixed(2));
    console.log ('print result on html: success');

    document.getElementById('div-text-result').innerHTML = (resultFinal.toFixed(2));
    console.log ('print result on html: success');
    
});