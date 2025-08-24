import { coletarDados } from "./coletarDados.js";
import { litrosNecessarios, custoTotal, totalViagem } from "./combCalculos.js";
import { exibirCustosAdicionais } from "./custosAdicionais.js";

// pegando os dados do html
const selectOrigem = document.querySelector('#selectOrigem');
const selectDestino = document.querySelector('#selectDestino');
const consumoInput = document.querySelector('#consumo');
const precoInput = document.querySelector('#preco-combustivel');
const btnCalcular = document.querySelector('#btn-calcular');
const resultadoLitros = document.querySelector('#resultado-litros');
const resultadoCustoTotal = document.querySelector('#resultado-custo');
const resultadoTotalViagem = document.querySelector('#resultado-total');

// executa quando clicar no botão de calcular

export function exibirContasVeiculos() {

    btnCalcular.addEventListener('click', (event) => {
        event.preventDefault();

        // pega a origem e o destino

        const origem = selectOrigem.value;
        const destino = selectDestino.value;

        const rotaSelecionada = coletarDados(origem, destino); // usa a função coletar dados criada anteriormente

        if (rotaSelecionada) {

            // pega os valores do input

            const consumo = parseFloat(consumoInput.value);

            const preco = parseFloat(precoInput.value);

            //pega os valores do objeto

            const distancia = rotaSelecionada.distancia;
            const alimentacao = rotaSelecionada.custoMedioRefeicao;
            const pedagio = rotaSelecionada.valorPedagios;

            // se o valor do consumo for maior que 0, aparece o resulado na tela
            if (consumo > 0 && preco > 0) {

                // chama as funções

                const litros = litrosNecessarios(distancia, consumo);
                const custo = custoTotal(distancia, consumo, preco);
                const viagemTotal = totalViagem(custo, alimentacao, pedagio);

                exibirCustosAdicionais(pedagio, alimentacao);

                // exibe o resultado na tela

                resultadoLitros.innerHTML = `<p>Litros necessários: ${litros.toFixed(2)}</p>`;
                resultadoCustoTotal.innerHTML = `<p>Custo total: R$ ${custo.toFixed(2)}</p>`
                resultadoTotalViagem.innerHTML = `<p>Total da viagem: R$ ${viagemTotal.toFixed(2)}</p>`
            }

            // mensagens de erro

            else {
                Swal.fire("Insira um valor maior que 0.");
            }
        }

        else {
            Swal.fire("Selecione uma rota de origem e um destino.");
        }

    });

}