import { coletarDados } from "./coletarDados.js";

// pegando os dados do html
const selectOrigem = document.querySelector('#selectOrigem');
const selectDestino = document.querySelector('#selectDestino');
const consumoInput = document.querySelector('#consumo');
const precoInput = document.querySelector('#preco'); // ---
const btnCalcular = document.querySelector('#btn-calcular');
const resultadoLitros = document.querySelector('#resultado');
const resultadoCustoTotal = document.querySelector('#total'); //---
const resultadoTotalViagem = document.querySelector('#total-viagem');

// função para calcular os litros necessarios
export function litrosNecessarios(distancia, consumo) {
    // validação para fazer o calculo se a distancia e o consumo for maior que 0
    if (distancia > 0 && consumo > 0) {
        const resultado = distancia / consumo;
        return resultado;
    } else {
        return null;
    }
}

export function custoTotal(distancia, consumo, preco) { //---
    // validação para fazer o calculo se a distancia e o consumo for maior que 0
    if (distancia > 0 && consumo > 0) {
        const resultado = (distancia / consumo) * preco;
        return resultado;
    } else {
        return null;
    }
}

export function totalViagem(custoTotal, alimentacao, pedagio) { 
    // validação para fazer o calculo se a distancia e o consumo for maior que 0
    if (custoTotal > 0 && alimentacao > 0 && pedagio >= 0) {
        const resultado = custoTotal + alimentacao + pedagio;
        return resultado;
    } else {
        return null;
    }
}

// executa quando clicar no botão de calcular
btnCalcular.addEventListener('click', (event) => {
    event.preventDefault();

    // pega a origem e o destino
    const origem = selectOrigem.value;
    const destino = selectDestino.value;

    const rotaSelecionada = coletarDados(origem, destino); // usa a função coletar dados criada anteriormente

    if (rotaSelecionada) {
        const consumo = parseFloat(consumoInput.value); //pega o valor do consumo
        const preco = parseFloat(precoInput.value); //pega o valor do preco ---
        const distancia = rotaSelecionada.distancia; //pega o valor da distancia
        const alimentacao = rotaSelecionada.custoMedioRefeicao;
        const pedagio = rotaSelecionada.valorPedagios;

        // se o valor do consumo for maior que 0, aparece o resulado na tela
        if (consumo > 0) {
            const litros = litrosNecessarios(distancia, consumo);

            const custo = custoTotal(distancia, consumo, preco); //---

            const viagemTotal = totalViagem(custo, alimentacao, pedagio);

            // Exibe o resultado diretamente na tela
            resultadoLitros.innerHTML = `<p>Litros necessários: ${litros.toFixed(2)}</p>`;

            resultadoCustoTotal.innerHTML = `<p>Custo total: ${custo.toFixed(2)}</p>` //---

            resultadoTotalViagem.innerHTML = `<p>Total da viagem: ${viagemTotal.toFixed(2)}</p>`
        }

        else {
            resultadoLitros.innerHTML = "Insira um valor de consumo válido.";
        }

    }

    else {
        resultadoLitros.innerHTML = "Selecione uma rota de origem e destino.";
    }

});