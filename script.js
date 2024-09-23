function limpar() {
    valorAtual = '0';
    operadorPendente = null;
    valorAnterior = null;
    atualizarTela();
}

botoes.forEach(botao => {
    botao.addEventListener('click', () => {

        if (botao.classList.contains('limpar')) {
            limpar();
        }
    });
});
