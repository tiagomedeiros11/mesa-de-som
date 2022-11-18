//função que dar o play no audio dos botões
function tocaSom(elementoDeAudio) { // função que executa o elemento de som
  const elemento = document.querySelector(elementoDeAudio);

  if (elemento != null && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("Elemento nao encontrado");
  }
}
const listaDeTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaDeTeclas.length; contador++) { //loop que verifica todos os instrumentos
  const tecla = listaDeTeclas[contador]; // constante referente as teclas existentes, que recebe o loop para verificar qual esta sendo selecionada

  const instrumento = tecla.classList[1]; //constante referente ao tipo de som que vai ser reproduzido, baseado em cada tecla selecionada

  const idAudio = `#som_${instrumento}`; // constante que altera o parametro da função com o template string do id de cada audio

  tecla.onclick = function () { // cada tecla recebe uma função anonima que executa a função de reprodução do som, baseado no id de cada elemento de som
    tocaSom(idAudio);
  };
  tecla.onkeydown = function (event) {
    if (event.code === "Space" || event.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };
  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
