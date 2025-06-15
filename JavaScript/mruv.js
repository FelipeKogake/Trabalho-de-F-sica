const objeto = document.getElementById("retangulo");
const escala = 23.25 * 0.01;
let intervalo;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function moverObjeto() {
  const posicaoInicial = Number(document.getElementById("posicaoInicial").value);
  const velocidadeInicial = Number(document.getElementById("velocidade").value);
  const tempoTotal = Number(document.getElementById("tempoTotal").value);
  const aceleracao = Number(document.getElementById("aceleracao").value);
  const caminho = document.getElementById("caminho");
  const linha = document.getElementById("lv");

  // Configura a reta numérica
  const deslocamentoMax = posicaoInicial + (velocidadeInicial * tempoTotal) + (0.5 * aceleracao * tempoTotal * tempoTotal); // estimativa
  const container = document.getElementById("retaNumerica");
  container.innerHTML = "";

  for (let i = 0; i < deslocamentoMax + 20; i++) {
    const p = document.createElement("p");

    if (i % 10 === 0) {
      const numeroFormatado = i.toString().padStart(3, "0");
      p.textContent = numeroFormatado;
      p.classList.add("numero");
    } else {
      p.textContent = "|";
      p.classList.add("traco");
    }

    container.appendChild(p);
  }

  linha.style.width = "100%";
  objeto.style.left = (posicaoInicial * 23) + "px";

  await sleep(2000);

  const inicioTempo = Date.now();
  let passo = posicaoInicial * 23;

  intervalo = setInterval(() => {
    const tempoPassado = (Date.now() - inicioTempo) / 1000;

    if (tempoPassado < tempoTotal) {
      const deslocamento = (velocidadeInicial * tempoPassado) + (0.5 * aceleracao * tempoPassado * tempoPassado); // a = 2 m/s² fixo
      const posicaoPx = (posicaoInicial + deslocamento) * 23;

      caminho.scrollLeft = posicaoPx - 500;
      objeto.style.left = posicaoPx + "px";
    } else {
      clearInterval(intervalo);
    }
  }, 10);
}

function pararAnimacao() {
  if (intervalo) {
    clearInterval(intervalo);
  }
}
