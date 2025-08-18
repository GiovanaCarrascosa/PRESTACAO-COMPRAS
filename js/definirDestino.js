import routes from "./dadosRota.js";

export function definirDestino(origem){
    let destinos = [];
    routes.forEach(rota => {
        if(rota.origem == origem) destinos.push(rota.destino);
    });
    return destinos;
}