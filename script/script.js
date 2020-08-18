
console.log('Esto es un cronómetro!');

let temporizador;
let contador = 0;
let iniciar = document.getElementById('iniciar');
let detener = document.getElementById('detener');
let limpiar = document.getElementById('limpiar');
let cronometro = document.getElementById('cronometro');


function comenzar(){
    temporizador = window.setInterval(detener2,1000);
}

function restaurar(){
    window.clearInterval(temporizador);
    contador = 0; 
    cronometro.innerHTML = contador;
}

function alto(){
    window.clearInterval(temporizador);
}

function detener2(){
    cronometro.innerHTML = contador++; 
}


iniciar.addEventListener('click', comenzar);
detener.addEventListener('click', alto);
limpiar.addEventListener('click', restaurar);
