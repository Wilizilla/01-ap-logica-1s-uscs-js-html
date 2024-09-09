const formMain = document.getElementById('form-main');
formMain.addEventListener('submit', function(event) {
    console.log ('html acess success');
    
// evita o comportamento padrão do evento submit
event.preventDefault(); 
    console.log ('prevent defaul action: success');
    
// pega o valor como string
let grade01 = document.getElementById('input-grade01').value;
let grade02 = document.getElementById('input-grade02').value;
let grade03 = document.getElementById('input-grade03').value;
    console.log ('catch inputs: success');

// Troca virgula por ponto se necessário
let grade01Coma = grade01.replace(/,/g, ".");
let grade02Coma = grade02.replace(/,/g, ".");
let grade03Coma = grade03.replace(/,/g, ".");
    console.log ('coma adjustment: success');

// transforma em número
let grade01num = Number(grade01Coma);
let grade02num = Number(grade02Coma);
let grade03num = Number(grade03Coma);

    console.log ('normalize number: success');

// calcula o resultado
let resultFinal = (grade01num + grade02num + grade03num) / 3;
    console.log ('calculate area: success');

// imprime no console
console.log('A primeira nota digitada foi: ' + grade01num);
console.log('A segunda nota digitada foi: ' + grade02num);
console.log('A terceira nota digitada foi: ' + grade03num);
console.log('A média é: ' + resultFinal);

// manda o valor para interface
document.getElementById('final-result').classList.remove('is-hidden');

document.getElementById('final-result').scrollIntoView({
    behavior: 'smooth', // Faz a rolagem ser suave
    block: 'start' // Alinha o elemento ao topo da janela de visualização
});

// manda o valor para interface
document.getElementById('div-text-result').innerHTML = (resultFinal.toFixed(2).replace(/\.00$/, ''));
    console.log ('print result on html: success');
    
});