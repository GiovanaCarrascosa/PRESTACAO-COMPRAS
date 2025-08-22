import { coletarDados } from "./coletarDados.js";

// função para calcular os litros necessarios
export function exibirTempoViagem() {
    // pegando os dados do html
    const selectOrigem = document.querySelector('#selectOrigem');
    const selectDestino = document.querySelector('#selectDestino');
    const btnCalcular = document.querySelector('#btn-calcular');
    const resultadoTempo = document.querySelector('#resultado-tempo');
    // executa quando clicar no botão de calcular
    btnCalcular.addEventListener('click', (event) => {
        event.preventDefault();

        // pega a origem e o destino
        const origem = selectOrigem.value;
        const destino = selectDestino.value;

        const rotaSelecionada = coletarDados(origem, destino); // usa a função coletar dados criada anteriormente

        if (rotaSelecionada) {
                // Exibe o resultado diretamente na tela
                resultadoTempo.innerHTML = `<p>Tempo estimado: ${Math.floor(rotaSelecionada.tempoEstimado)}h ${Math.round((rotaSelecionada.tempoEstimado-Math.floor(rotaSelecionada.tempoEstimado))*60)}min</p>`;
            }

    });
}

