document.addEventListener('DOMContentLoaded', () => {
    const tela = document.querySelector('.tela');
    const botoes = document.querySelectorAll('button');

    let valorAtual = '0';
    let operadorPendente = null;
    let valorAnterior = null;

    function atualizarTela() {
        tela.textContent = valorAtual;
    }

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {

        });
    });

    atualizarTela();
});
