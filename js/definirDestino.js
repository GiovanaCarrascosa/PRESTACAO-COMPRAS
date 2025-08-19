import routes from "./dadosRota.js";

//Função para selecionar todos os destinos possíveis com base na origem selecionada
export function definirDestino(origem){

    //Lista vazia que será preenchida com os possíveis destinos
    let destinos = [];

    routes.forEach(rota => {
        //Verifica qual é a origem escolhida e ja coloca o possível destino na lista
        if(rota.origem == origem) destinos.push(rota.destino);
    });

    //Devolve a lista com todos os destinos possíveis
    return destinos;
    
}

