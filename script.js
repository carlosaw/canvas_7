// Initial Data = como começa
let currentColor = 'black';
let canDraw = false; // Varável desenho
let mouseX = 0;// Posição inicial do mouse
let mouseY = 0;// Posição inicial do mouse

let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');// Pega contexto em 2d





// Events = evento ao clicar na cor
document.querySelectorAll('.colorArea .color').forEach(item => {
  item.addEventListener('click', colorClickEvent);
});

// Quando o click do mouse ABAIXAR, ative o modo desenho.
screen.addEventListener('mousedown', mouseDowEvent);
// Quando o mouse se MOVER, se o modo desenho estiver ativado, desenhe.
screen.addEventListener('mousemove', mouseMoveEvent);
// Quando o click do mouse LEVANTAR, desative o modo desenho.
screen.addEventListener('mouseup', mouseUpEvent);
// Limpar tudo ao clicar
document.querySelector('.clear').addEventListener('click', clearScreen);




// Functions = Ações ao clicar
function colorClickEvent(e) {// Cor clicada
  let color = e.target.getAttribute('data-color');// Pega os atributos
  //console.log("Cor clicada: ", color);
  currentColor = color;// cor clicada = currentColor

  // Se estiver ativo remove
  document.querySelector('.color.active').classList.remove('active');
  e.target.classList.add('active');// adiciona o clicado 
}

function mouseDowEvent(e) {
  canDraw = true;
  mouseX = e.pageX - screen.offsetLeft;// Pega posição que o mouse está.
  mouseY = e.pageY - screen.offsetTop;// Pega posição que o mouse está.
}
function mouseMoveEvent(e) {
  
  if(canDraw) {// Se pode desenhar
    /*
    let pointX = e.pageX - screen.offsetLeft;// Posição x
    let pointY = e.pageY - screen.offsetTop;// Posição Y
    console.log(pointX, pointY);// Pega posição do mouse
    */
    draw(e.pageX, e.pageY);
  }
  
}
function mouseUpEvent() {
  canDraw = false;
}
function draw(x, y) {
  let pointX = x - screen.offsetLeft;
  let pointY = y - screen.offsetTop;

  // desenhar
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineJoin = "round";
  ctx.moveTo(mouseX, mouseY);
  ctx.lineTo(pointX, pointY);
  ctx.closePath();
  ctx.strokeStyle = currentColor;
  ctx.stroke();

  mouseX = pointX;
  mouseY = pointY;

}

function clearScreen() {
  // Setar a posição geral
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}