import { coletarDados } from "./coletarDados.js";
import { definirDestino } from "./definirDestino.js";

//Função para atualizar os dados no html
export function atualizarListaViagem(origem,destino){

    //Pega o elemento da lista do html
    const elemLista = document.querySelector('ul');

    //Pega todos os dados da rota selecionada
    const rota = coletarDados(origem,destino);

    //Muda o HTML usando um template de string para preencher automaticamente
    elemLista.innerHTML = `
    <li class="lista-dados-viagem__li"> Distância: ${rota.distancia} km;</li>
    <li class="lista-dados-viagem__li"> Pedágios: ${rota.pedagios} praças;</li>
    <li class="lista-dados-viagem__li"> Valor total pedágios: R$ ${rota.valorPedagios};</li>
    <li class="lista-dados-viagem__li"> Restaurantes: ${rota.restaurantes};</li>
    <li class="lista-dados-viagem__li"> Tempo estimado: ${Math.floor(rota.tempoEstimado)}h ${Math.round((rota.tempoEstimado-Math.floor(rota.tempoEstimado))*60)}min;</li>
    <li class="lista-dados-viagem__li"> Pontos turísticos: ${rota.pontosTuristicos.join(", ")}.</li>`;

}

//Função para colocar as origens no select(html) de origens
export function atualizarSelectOrigem(){

    //Guarda o select de origens do HTML
    const select = document.querySelector('#selectOrigem');

    //Lista com as capitais dos estados do Brasil (possíveis origens)
    const origens = [
        "Aracaju", "Belém", "Belo Horizonte", "Boa Vista", "Brasília", "Campo Grande", 
        "Curitiba", "Cuiabá", "Florianópolis", "Fortaleza", "Goiânia", "João Pessoa", "Macapá",
        "Maceió", "Manaus", "Maceió", "Natal", "Palmas", "Porto Alegre", "Porto Velho", 
        "Recife", "Rio Branco", "Rio de Janeiro", "São Luís", "São Paulo", "Salvador", 
        "Teresina", "Vitória"
    ];

    origens.forEach((origem)=>{
        //Cria um option para cada origem da lista
        const option = document.createElement('option');

        //Coloca o texto(nome da capital) no value e no texto do option
        option.textContent = origem;
        option.value = origem;

        //Adiciona o option pro select
        select.appendChild(option);
    });

}

//Função para colocar os destinos no select(html) com base na origem
export function atualizarSelectDestino(origem){

    //Guarda o select de destinos do HTML
    const select = document.querySelector('#selectDestino');

    //Reseta o select
    select.innerHTML = '<option value=""></option>';
    select.disabled = false;

    //Guarda uma lista com todos os destinos daquela origem
    const destinos = definirDestino(origem);

    destinos.forEach((destino)=>{
        //Cria um option para cada destino da lista
        const option = document.createElement('option');

        //Coloca o texto(nome do destino) no value e no texto do option
        option.textContent = destino;
        option.value = destino;
        
        //Adiciona o option pro select
        select.appendChild(option);
    });

}