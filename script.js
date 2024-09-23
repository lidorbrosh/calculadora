function calcular() {
    if (operadorPendente === null || valorAnterior === null) {
        return;
    }
    const anterior = parseFloat(valorAnterior);
    const atual = parseFloat(valorAtual);
    let resultado;

    try {
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
                if (atual === 0) {
                    throw new Error('Divisão por zero');
                }
                resultado = anterior / atual;
                break;
        }

        valorAtual = resultado.toString();
    } catch (error) {
        valorAtual = 'Erro';
    }

    operadorPendente = null;
    valorAnterior = null;
    atualizarTela();
}
