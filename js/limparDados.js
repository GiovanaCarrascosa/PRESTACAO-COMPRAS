// Função para limpar o formulário e os resultados
export function limparFormulario(formSelector) {
    const form = document.querySelector(formSelector);
    if (form) {
        form.reset(); // Limpa os inputs
    }

    // Limpa os resultados, mantendo os rótulos fixos
    const resultados = [
        { id: 'resultado-litros', texto: 'Litros necessários:' },
        { id: 'resultado-custo', texto: 'Custo total:' },
        { id: 'resultado-tempo', texto: 'Tempo estimado:' },
        { id: 'resultado-total', texto: 'Total da viagem:' }
    ];

    resultados.forEach((item) => {
        const elemento = document.getElementById(item.id);
        if (elemento) {
            elemento.textContent = item.texto;
        }
    });

    // Limpa os resultados adicionais (sem ID, só por classe)
    const pedagios = document.querySelector('.resultados-custos-pedagios_p');
    const alimentacao = document.querySelector('.resultados-custos-alimentacao_p');

    if (pedagios) {
        pedagios.textContent = 'Pedágios:';
    }

    if (alimentacao) {
        alimentacao.textContent = 'Alimentação:';
    }
}