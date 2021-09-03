// Cor selecionada
let currentColor = 'black';
// Seleciona a cor clicada.
document.querySelectorAll('.colorArea .color').forEach(item => {
  item.addEventListener('click', colorClickEvent);
});

function colorClickEvent(e) {// Cor clicada
  let color = e.target.getAttribute('data-color');
  //console.log("Cor clicada: ", color);
  currentColor = color;

  // Se estiver ativo remove
  document.querySelectorAll('.color.active').classList.remove('active');
  e.target.classList.add('active');// adiciona o clicado 
}