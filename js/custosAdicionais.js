export function exibirCustosAdicionais(pedagio, alimentacao) {
    const pedagiosElem = document.querySelector(".resultados-custos-pedagios_p");
    const alimentacaoElem = document.querySelector(".resultados-custos-alimentacao_p");

    if (pedagiosElem) {
        pedagiosElem.textContent = `Pedágios: R$ ${pedagio.toFixed(2)}`;
    }

    if (alimentacaoElem) {
        alimentacaoElem.textContent = `Alimentação: R$ ${alimentacao.toFixed(2)}`;
    }
}

// limpa os campos
export function limparCustosAdicionais() {
    const pedagiosElem = document.querySelector(".resultados-custos-pedagios_p");
    const alimentacaoElem = document.querySelector(".resultados-custos-alimentacao_p");

    if (pedagiosElem) pedagiosElem.textContent = "Pedágios:";
    if (alimentacaoElem) alimentacaoElem.textContent = "Alimentação:";
}
