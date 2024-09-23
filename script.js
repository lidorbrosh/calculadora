botoes.forEach(botao => {
    botao.addEventListener('click', () => {

        if (botao.classList.contains('igual')) {
            calcular();
        }
    });
});
