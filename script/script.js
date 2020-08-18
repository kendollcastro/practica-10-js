

let temporizador;
contador = 0;

let iniciar = document.getElementById('iniciar');
let detener = document.getElementById('detener');
let limpiar = document.getElementById('limpiar');

const cronometro = document.getElementById('cronometro');


function comenzar(){
    temporizador = window.setInterval(detener2,1000);
}

function restaurar(){
    window.clearInterval(temporizador);
    contador = 0; 
    cronometro.innerHMTMl = contador;
}

function alto(){
    window.clearInterval(temporizador);
}

function detener2(){
    cronometro.innerHTML = count++; 
}


iniciar.addEventListener('click', iniciar);
detener.addEventListener('click', detener);
limpiar.addEventListener('click', limpiar);
