document.addEventListener('keydown', (evento) => {
    if (evento.key >= '0' && evento.key <= '9') {
        adicionarDigito(evento.key);
    } else if (evento.key === '.') {
        if (!valorAtual.includes('.')) {
            valorAtual += '.';
            atualizarTela();
        }
    } else if (['+', '-', '*', '/'].includes(evento.key)) {
        definirOperador(evento.key === '*' ? 'X' : evento.key);
    } else if (evento.key === 'Enter' || evento.key === '=') {
        calcular();
    } else if (evento.key === 'Escape') {
        limpar();
    }
});
