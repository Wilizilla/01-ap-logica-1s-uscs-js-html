const formMain = document.getElementById('form-square');
formMain.addEventListener('submit', function(event) {
    console.log ('html acess success');
    
// evita o comportamento padrão do evento submit
event.preventDefault(); 
    console.log ('prevent defaul action: success');
 
// pega o valor como string
let squareValue = document.getElementById('form-square-side').value;

// Troca virgula por ponto se necessário
let squareComa = squareValue.replace(/,/g, ".");

// transforma em número
let squareSide = Number(squareComa);
    console.log ('normalize number: success');

// calcula a área
let squareArea = (squareSide ** 2);
    console.log ('calculate area: success');

// imprime no console
console.log('O valor digitado foi: ' + squareSide+ ' cm');
console.log('A área do quadrado é de: ' + squareArea+ ' cm²');
console.log('A área do quadrado é de: ' + (squareArea * 100) + ' m²');

// xxx

// manda o valor para interface
document.getElementById('final-result').classList.remove('is-hidden');

document.getElementById('final-result').scrollIntoView({
    behavior: 'smooth', // Faz a rolagem ser suave
    block: 'start' // Alinha o elemento ao topo da janela de visualização
});

// manda o valor para interface
document.getElementById('div-area').innerHTML = squareArea.toFixed(2) + ' cm²';
    console.log ('print result on html: success');

});