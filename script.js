document.addEventListener('DOMContentLoaded', () => {
    const tela = document.querySelector('.tela');
    const botoes = document.querySelectorAll('button');

    let valorAtual = '0';
    let operadorPendente = null;
    let valorAnterior = null;

    function atualizarTela() {
        tela.textContent = valorAtual;
    }
  
    function limpar() {
    valorAtual = '0';
    operadorPendente = null;
    valorAnterior = null;
    atualizarTela();
    }
  
    function adicionarDigito(digito) {
        if (valorAtual === '0') {
            valorAtual = digito;
        } else {
            valorAtual += digito;
        }
        atualizarTela();
    }
  
  
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
        if (botao.classList.contains('numero')) {
            adicionarDigito(botao.textContent);
        } else if (botao.classList.contains('operador')) {
            definirOperador(botao.textContent);
        } else if (botao.classList.contains('igual')) {
            calcular();
        } else if (botao.classList.contains('limpar')) {
            limpar();
        } else if (botao.classList.contains('ponto')) {
            if (!valorAtual.includes('.')) {
                valorAtual += '.';
                atualizarTela();
            }
        }
    });

    atualizarTela();
});
