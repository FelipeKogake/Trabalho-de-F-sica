var pista;
var carroImg;
const objeto = document.getElementById("retangulo")
const escala = 23.25*0.01;
const caractere = "|";

let intervalo;


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function moverObjeto() {
    const inputPosicaoInicial = document.getElementById("posicaoInicial")
    const posicaoInicial = Number(inputPosicaoInicial.value)
    let passo = 0;
    const inputvelocidade = document.getElementById("velocidade")
    const velocidade = Number(inputvelocidade.value)
    const inputTempoTotal = document.getElementById("tempoTotal")
    const tempoTotal = Number(inputTempoTotal.value)
    const caminho = document.getElementById("caminho")
    const linha = document.getElementById("lv")

    // const repeticoes = posicaoInicial + velocidade * tempoTotal;
    // const caractere = "|";
    // const container = document.getElementById("retaNumerica");

    // // Limpa o conteúdo anterior (se necessário)
    // container.innerHTML = "";

    // for (let i = 0; i < repeticoes; i++) {
    //     const p = document.createElement("p");
    //     p.textContent = caractere;
    //     p.classList.add("traco"); // Estilo individual
    //     container.appendChild(p);
    // }

    const repeticoes = posicaoInicial + velocidade * tempoTotal + 10;
    const caractere = "|";
    const container = document.getElementById("retaNumerica");

    container.innerHTML = "";

    for (let i = 0; i < repeticoes; i++) {
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
    
    linha.style.width = "100%"
    objeto.style.left = (posicaoInicial * 23) + "px"

    await sleep(2000);

    const inicioTempo = Date.now();

    passo += (posicaoInicial * 23)

    intervalo = setInterval(() => {
        let tempoPassado = (Date.now() - inicioTempo) / 1000
        caminho.scrollLeft = passo -500

        if(tempoPassado < tempoTotal) {
            passo += escala * velocidade 

            objeto.style.left = passo+10 + "px"
        }
        else{
            clearInterval(intervalo)
        }
    }, 10)
}



function pararAnimacao() {
    if(intervalo) {
        clearInterval(intervalo);
    }
}