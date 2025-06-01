const objeto = document.getElementById("retangulo")
const escala = 23.25*0.01;

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
    

    objeto.style.left = (posicaoInicial * 23) + "px"

    await sleep(2000);

    const inicioTempo = Date.now();

    passo += (posicaoInicial * 23)

    intervalo = setInterval(() => {
        let tempoPassado = (Date.now() - inicioTempo) / 1000

        if(tempoPassado < tempoTotal) {
            passo += escala * velocidade

            objeto.style.left = passo + "px"
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