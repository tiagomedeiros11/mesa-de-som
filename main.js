//função que dar o play no audio dos botões
function tocaSom(idElementoAudio) { // função que executa o elemento de som
  document.querySelector(idElementoAudio).play();
}
const teclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < teclas.length; contador++) { //loop que verifica todos os instrumentos
  const tecla = teclas[contador]; // constante referente as teclas existentes, que recebe o loop para verificar qual esta sendo selecionada

  const instrumento = tecla.classList[1]; //constante referente ao tipo de som que vai ser reproduzido, baseado em cada tecla selecionada

  const idAudio = `#som_${instrumento}`; // constante que altera o parametro da função com o template string do id de cada audio

  tecla.onclick = function () { // agora cada tecla recebe uma função anonima que executa a função de reprodução do som, baseado no id de cada elemento de som
    tocaSom(idAudio);
  };
}
