function definirOperador(operador) {
    if (operadorPendente !== null) {
        calcular();
    }
    valorAnterior = valorAtual;
    operadorPendente = operador;
    valorAtual = '0';
}

function calcular() {
    if (operadorPendente === null || valorAnterior === null) {
        return;
    }
    const anterior = parseFloat(valorAnterior);
    const atual = parseFloat(valorAtual);
    let resultado;

    switch (operadorPendente) {
        case '+':
            resultado = anterior + atual;
            break;
        case '-':
            resultado = anterior - atual;
            break;
        case 'X':
            resultado = anterior * atual;
            break;
        case '/':
            resultado = anterior / atual;
            break;
    }

    valorAtual = resultado.toString();
    operadorPendente = null;
    valorAnterior = null;
    atualizarTela();
}

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        
        if (botao.classList.contains('operador')) {
            definirOperador(botao.textContent);
        }
    });
});
