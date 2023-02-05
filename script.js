let tela = document.querySelector(".tela");
let pincel = tela.getContext('2d');

//canvas
pincel.fillStyle = 'black';
pincel.fillRect(0,0,600,400);

//Raquete
let xRaquete = 10;
let yRaquete = 150;

function desenhaRaquete(xRaquete, yRaquete) {

    pincel.fillStyle = 'white';
    pincel.fillRect(xRaquete, yRaquete, 15, 110);
}

function limpaTela() {

    pincel.clearRect(0, 0, 600, 400);

}

//Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let sentidoX = 5;
let sentidoY = 5;
let raioBolinha = 10;

function desenhaBolinha(x, y, raioBolinha, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raioBolinha, 0, 2 * Math.PI);
    pincel.fill();

}

function atualizaTela() {

    limpaTela();
    if(xBolinha + raioBolinha >= 600 || xBolinha - raioBolinha < 0) {    //verifica colisao com a borda
        sentidoX *= -1;
    }if(yBolinha + raioBolinha >= 400 || yBolinha - raioBolinha <= 0) {
        sentidoY *= -1;
    }

    desenhaBolinha(xBolinha, yBolinha, raioBolinha, 'white');
    xBolinha+=sentidoX;
    yBolinha+=sentidoY;

    desenhaRaquete(xRaquete, yRaquete);

}

setInterval(atualizaTela, 300);

//movimentação da Raquete
let cima = 38; 
let baixo = 40;
function movimentaRaquete(event) {

    if(event.keyCode == cima && yRaquete > 0) {  
        yRaquete-=30;
    }else if(event.keyCode == baixo && yRaquete < 300) {
        yRaquete+=30;
    }
}

document.onkeydown = movimentaRaquete;
