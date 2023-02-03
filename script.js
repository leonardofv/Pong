let tela = document.querySelector(".tela");
let pincel = tela.getContext('2d');

//canvas
pincel.fillStyle = 'black';
pincel.fillRect(0,0,600,400);

//Raquete
function desenhaRaquete() {

    pincel.fillStyle = 'white';
    pincel.fillRect(10, 150, 15, 110);
    
}

//Parei aqui
function movimentaRaquete(event) {

    console.log(event);
}

function desenhaBolinha(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();

}

function limpaTela() {

    pincel.clearRect(0, 0, 600, 400);

}

//Variáveis da bolinha
let x = 300;
let y = 200;
let sentidoX = 5;
let sentidoY = 5;

function atualizaTela() {

    limpaTela();
    if(x >= 600) {    //verifica colisao com a borda
        sentidoX = -5;
    }if(x <= 0) {
        sentidoX = 5;
    }if(y >= 400) {
        sentidoY -= 5;
    }if(y <= 5) {
        sentidoY = 5;
    }
    desenhaBolinha(x, y, 10, 'white');
    x+=sentidoX;
    y+=sentidoY;
    desenhaRaquete();

}

setInterval(atualizaTela, 11);
let uo = tela.keycode();




