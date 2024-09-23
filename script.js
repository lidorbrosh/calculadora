document.addEventListener('DOMContentLoaded', () => {
    const tela = document.querySelector('.tela');
    const botoes = document.querySelectorAll('button');

    let valorAtual = '0';
    let operadorPendente = null;
    let valorAnterior = null;

    function atualizarTela() {
        tela.textContent = valorAtual;
    }
  
    function adicionarDigito(digito) {
        if (valorAtual === '0') {
            valorAtual = digito;
        } else {
            valorAtual += digito;
        }
        atualizarTela();
    }

    botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        if (botao.classList.contains('numero')) {
            adicionarDigito(botao.textContent);
        } else if (botao.classList.contains('ponto')) {
            if (!valorAtual.includes('.')) {
                valorAtual += '.';
                atualizarTela();
            }
        }
    });

    atualizarTela();
});