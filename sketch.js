//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 3;
let velocidadeYBolinha = 3;

//variaveis da primeira raquete
let xRaquete = 5;
let yRaquete = 150;

//dimensões raquete 1
let raqueteAltura = 110;
let raqueteComprimento = 10;

//variaveis da segunda raquete
let xRaquete2 = 585;
let yRaquete2 = 150;

//dimensões raquete 2
let raqueteAltura2 = 110;
let raqueteComprimento2 = 10;

function setup() {
  createCanvas(600, 400);
}

//placar do jogo
let meusPontos = 0;
let meusPontos2 = 0;

function draw() {
  background(120);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete ();
  movimentaMinhaRaquete2 ();
  verificaColisaoRaquete();
 // verificaColisaoRaquete2(xRaquete2, yRaquete2);
  mostraRaquete2(xRaquete2, yRaquete2);
  incluiPlacar ();
  marcaPontos();
} 
//functions da bolinha
function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){ 
  if (xBolinha + raio> width || xBolinha - raio <0){
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
      velocidadeYBolinha *= -1   
      }
}
function colisaoRaqueteBiblioteca(x,y){
  colidiu = collideRectCircle(x,y, raqueteComprimento, raqueteAltura,xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
  }
}

//Minhas raquetes
function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function mostraRaquete2(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}
//Movimenta minha raquete 1
function movimentaMinhaRaquete (){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}
//movimenta minha raquete 2
function movimentaMinhaRaquete2 (){
  if (keyIsDown(UP_ARROW)){
    yRaquete2 += 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete2 -= 10;
  }
}
//Verificação de colisões
function verificaColisaoRaquete(x,y){
  if(xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
    background("red");
    background("blue")
  }
}

function incluiPlacar(){
  stroke(250)
  textAlign(CENTER);
  textSize (20);
  fill(color(255, 140, 0));
  rect(150,10,40,20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(250, 140, 0));
  rect(450,10,40,20);
  fill(255);
  text(meusPontos2, 470, 26);
}

function marcaPontos(){
  if (xBolinha > 585){
    meusPontos += 1;
  }
  if (xBolinha < 15){
    meusPontos2 += 1;
  }
}
