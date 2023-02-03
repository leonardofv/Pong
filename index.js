let tela = document.querySelector(".tela");
let pincel = tela.getContext('2d');

pincel.fillStyle = 'black';
pincel.fillRect(0,0,600,400);

function desenhaBolinha(x,y,raio) {

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();

}

function limpaTela() {

    pincel.clearRect(0, 0, 600, 400);

}

let x = 20;

function atualizaTela() {

    limpaTela();
    desenhaBolinha(x,200,10);
    x++;

}

setInterval(atualizaTela, 5);



