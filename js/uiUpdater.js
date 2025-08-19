import { coletarDados } from "./coletaDados.js";
import { definirDestino, definirOrigem } from "./definirDestino.js";

export function atualizarListaViagem(origem,destino){
    const elemLista = document.querySelector('ul');
    const rota = coletarDados(origem,destino);

    elemLista.innerHTML = `
<li>Distância: ${rota.distancia} km</li>
<li>Pedágios: ${rota.pedagios} praças</li>
<li>Valor total pedágios: R$ ${rota.valorPedagios}</li>
<li>Restaurantes: ${rota.restaurantes}</li>
<li>Tempo estimado: ${Math.floor(rota.tempoEstimado)}h ${Math.round((rota.tempoEstimado-Math.floor(rota.tempoEstimado))*60)}min</li>
<li>Pontos turísticos: ${rota.pontosTuristicos}</li>`;

}

export function atualizarSelectOrigem(){
    const select = document.querySelector('#selectOrigem');

    const origens = definirOrigem();

    origens.forEach((origem)=>{
        const option = document.createElement('option');

        option.textContent = origem;
        option.value = origem;
        select.appendChild(option);
    });
}

export function atualizarSelectDestino(origem){
    const select = document.querySelector('#selectDestino');

    select.innerHTML = '<option value=""></option>';
    select.disabled = false;

    const destinos = definirDestino(origem);

    destinos.forEach((destino)=>{
        const option = document.createElement('option');

        option.textContent = destino;
        option.value = destino;
        select.appendChild(option);
    });
}