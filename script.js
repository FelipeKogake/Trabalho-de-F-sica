function openTab(evt, tabId) {
  // 1. Esconde todo o conteúdo das abas
  document.querySelectorAll('.tab-content').forEach(div => {
    div.style.display = 'none';
  });

  // 2. Remove a classe 'active' de todos os botões
  document.querySelectorAll('.tab').forEach(button => {
    button.classList.remove('active');
  });

  // 3. Mostra o conteúdo da aba clicada
  document.getElementById(tabId).style.display = 'block';

  // 4. Adiciona a classe 'active' ao botão clicado
  evt.currentTarget.classList.add('active');
}

let clique = 0;

function openMenu() {
    const corpo = document.getElementById("corpo")
    const menu = document.getElementById("sidebar")
    const main = document.getElementById("principal")
    
    if (clique % 2 === 0){
        menu.style.transform = 'translateX(0)'
    }
    else{
        menu.style.transform = 'translateX(-100%)'
    }

    clique++;
}
