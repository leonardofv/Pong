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
let larguraRaquete = 10;
let alturaRaquete = 90;

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
let xRaqueteOponente = 580;
let yRaqueteOponente = 150;
let larguraRaqueteOponente = 10;
let alturaRaqueteOponente = 90;
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
let xBolinha = 280;
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
    //movimentaRaqueteOponente();
    mostraPlacar();
    marcaPonto();
    
 
}

setInterval(atualizaTela, 20);

document.onkeydown = movimentaRaquete;

//placar
let meusPontos = 0;
let pontosOponente = 0;

function mostraPlacar() {

    //borda
    pincel.fillStyle = 'white';
    pincel.fillRect(120, 7, 90, 40);
    pincel.fillRect(420, 8, 90, 40);
    //placar
    pincel.font = '40px serif';
    pincel.fillStyle = 'black';
    pincel.fillText(meusPontos, 150, 40);
    pincel.fillText(pontosOponente, 450, 40);

}

function marcaPonto() {

    if(xBolinha > 588) { //588 foi a posiçãoX que encontrei para não pontuar 3 pontos em uma só vez.
        meusPontos+=1;
    }
    if(xBolinha < xRaquete) {
        pontosOponente +=1;
    }
}


