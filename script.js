let tela = document.querySelector(".tela");
let pincel = tela.getContext('2d');

//canvas
pincel.fillStyle = 'black';
pincel.fillRect(0,0,600,400);

function limpaTela() {

    pincel.clearRect(0, 0, 600, 400);

}

//Raquete
let xRaquete = 10;
let yRaquete = 150;
let larguraRaquete = 15;
let alturaRaquete = 110;

function desenhaRaquete(xRaquete, yRaquete) {

    pincel.fillStyle = 'white';
    pincel.fillRect(xRaquete, yRaquete, larguraRaquete ,alturaRaquete);
}

//Variáveis das setas
let cima = 38; 
let baixo = 40;

function movimentaRaquete(event) {

    if(event.keyCode == cima && yRaquete > 0) {  
        yRaquete-=30;
    }else if(event.keyCode == baixo && yRaquete < 300) {
        yRaquete+=30;
    }
}

function colisaoRaquete() {
    //Obs: esse trecho deu dor de cabeça.
    if(xBolinha - raioBolinha < xRaquete + larguraRaquete 
        && yBolinha - raioBolinha < yRaquete + alturaRaquete 
        && yBolinha + raioBolinha > yRaquete) {
        sentidoX *= -1;
    }

}

//Raquete do Oponente
let xRaqueteOponente = 575;
let yRaqueteOponente = 150;
let larguraRaqueteOponente = 15;
let alturaRaqueteOponente = 110;
let movimentacaoOponente;

function raqueteOponente(xRaqueteOponente, yRaqueteOponente) {

    pincel.fillStyle = 'white';
    pincel.fillRect(xRaqueteOponente, yRaqueteOponente, larguraRaqueteOponente, alturaRaqueteOponente);
}

function movimentaRaqueteOponente() {
    //Obs: Deu mais dor de cabeça ainda
    movimentacaoOponente = yBolinha - yRaqueteOponente - larguraRaqueteOponente;
    yRaqueteOponente += movimentacaoOponente - 30;
}

function colisaoRaqueteOponente() {

    if(xBolinha + raioBolinha > xRaqueteOponente
        && yBolinha - raioBolinha < yRaqueteOponente + alturaRaqueteOponente
        && yBolinha + raioBolinha > yRaqueteOponente) {
            sentidoX *= -1;
        }
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

function movimentaBolinha() {

    xBolinha+=sentidoX;
    yBolinha+=sentidoY;

}

function colisaoComBorda() {

    if(xBolinha + raioBolinha >= 600 || xBolinha - raioBolinha < 0) {
        sentidoX *= -1;
    }if(yBolinha + raioBolinha >= 400 || yBolinha - raioBolinha <= 0) {
        sentidoY *= -1;
    }
}

function atualizaTela() {

    limpaTela();
    desenhaBolinha(xBolinha, yBolinha, raioBolinha, 'white');
    movimentaBolinha();
    colisaoComBorda();
    desenhaRaquete(xRaquete, yRaquete);
    colisaoRaquete();
    raqueteOponente(xRaqueteOponente, yRaqueteOponente);
    colisaoRaqueteOponente();
    movimentaRaqueteOponente();

}

setInterval(atualizaTela, 20);

document.onkeydown = movimentaRaquete;