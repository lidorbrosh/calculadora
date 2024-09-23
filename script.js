document.addEventListener('DOMContentLoaded', () => {
    const tela = document.querySelector('.tela');
    const botoes = document.querySelectorAll('button');

    let valorAtual = '0';
    let operadorPendente = null;
    let valorAnterior = null;
    let precisaLimparTela = false;

    function atualizarTela() {
        tela.textContent = valorAtual;
    }

    function limpar() {
        valorAtual = '0';
        operadorPendente = null;
        valorAnterior = null;
        precisaLimparTela = false;
        atualizarTela();
    }

    function adicionarDigito(digito) {
        if (precisaLimparTela) {
            valorAtual = digito;
            precisaLimparTela = false;
        } else {
            valorAtual = valorAtual === '0' ? digito : valorAtual + digito;
        }
        atualizarTela();
    }

    function adicionarPonto() {
        if (!valorAtual.includes('.')) {
            valorAtual += '.';
            atualizarTela();
        }
    }

    function definirOperador(operador) {
        if (operadorPendente !== null) {
            calcular();
        }
        valorAnterior = valorAtual;
        operadorPendente = operador;
        valorAtual += ' ' + operador + ' ';
        atualizarTela();
        precisaLimparTela = false;
    }

    function calcular() {
        if (operadorPendente === null || valorAnterior === null) {
            return;
        }
        const partes = valorAtual.split(' ');
        const anterior = parseFloat(valorAnterior);
        const atual = parseFloat(partes[partes.length - 1]);
        let resultado;

        switch (operadorPendente) {
            case '+':
                resultado = anterior + atual;
                break;
            case '-':
                resultado = anterior - atual;
                break;
            case 'X': // Alterado de '*' para 'X'
                resultado = anterior * atual;
                break;
            case '/':
                if (atual !== 0) {
                    resultado = anterior / atual;
                } else {
                    limpar();
                    valorAtual = 'Erro: Divisão por zero';
                    atualizarTela();
                    return;
                }
                break;
        }

        valorAtual = resultado.toString();
        operadorPendente = null;
        valorAnterior = null;
        precisaLimparTela = true;
        atualizarTela();
    }

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            if (botao.classList.contains('numero')) {
                adicionarDigito(botao.textContent);
            } else if (botao.classList.contains('operador')) {
                definirOperador(botao.textContent);
            } else if (botao.classList.contains('igual')) {
                calcular();
            } else if (botao.classList.contains('limpar')) {
                limpar();
            } else if (botao.classList.contains('ponto')) {
                adicionarPonto();
            }
        });
    });

    // Suporte para entrada do teclado
    document.addEventListener('keydown', (evento) => {
        if (evento.key >= '0' && evento.key <= '9') {
            adicionarDigito(evento.key);
        } else if (evento.key === '.') {
            adicionarPonto();
        } else if (['+', '-', 'X', '/'].includes(evento.key)) { // Alterado '*' para 'X'
            definirOperador(evento.key);
        } else if (evento.key === 'Enter' || evento.key === '=') {
            calcular();
        } else if (evento.key === 'Escape' || evento.key.toLowerCase() === 'c') {
            limpar();
        } else if (evento.key === 'Backspace') {
            if (valorAtual.endsWith(' ')) {
                valorAtual = valorAtual.slice(0, -3);
            } else {
                valorAtual = valorAtual.slice(0, -1);
            }
            if (valorAtual === '') valorAtual = '0';
            atualizarTela();
        } else if (evento.key === '*') { // Adicionado para suportar a tecla '*' do teclado
            definirOperador('X');
        }
    });

    atualizarTela();
});
