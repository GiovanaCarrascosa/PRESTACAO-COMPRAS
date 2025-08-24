import { atualizarListaViagem,atualizarSelectOrigem,atualizarSelectDestino } from "./uiUpdater.js";
import { exibirTempoViagem } from "./dadosVeiculo.js";
import { exibirContasVeiculos } from "./domElements.js";
import { atualizarFooter } from "./dataFooter.js";
import { limparFormulario } from "./limparDados.js";
import { limparCustosAdicionais } from "./custosAdicionais.js";

//Variaveis que recebem os dois selects (origem,destino)
const selectOrigem = document.querySelector('#selectOrigem');
const selectDestino = document.querySelector('#selectDestino');
const btnLimpar = document.querySelector('.btn-limpar');

//Roda quando a página carregar
document.addEventListener('DOMContentLoaded',()=>{

    //Quando selecionar uma origem atualiza dinamicamente o select de destinos
    selectOrigem.addEventListener('input', ()=>{
        atualizarSelectDestino(selectOrigem.value);
    });

    //Quando selecionar um destino atualiza dinamicamente os dados da rota
    selectDestino.addEventListener('input', ()=>{
        atualizarListaViagem(selectOrigem.value,selectDestino.value);
    });

    btnLimpar.addEventListener('click', (e) =>{

        e.preventDefault();
        limparFormulario('.dados-veiculo_form');
        limparCustosAdicionais();

    });

    //Inicia o select de origem
    atualizarSelectOrigem();

    // chama as funções
    exibirTempoViagem();
    exibirContasVeiculos();
    atualizarFooter();
});


