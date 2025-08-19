import routes from "./dadosRota.js";

export function definirDestino(origem){
    let destinos = [];
    routes.forEach(rota => {
        if(rota.origem == origem) destinos.push(rota.destino);
    });
    return destinos;
}


export function definirOrigem(){
    let origens = [];
    routes.forEach((rota,i)=>{
        if(i+1==routes.length){
            if(rota.origem != routes[i-1].origem){
                origens.push(rota.origem);
            }
        }else{
            if(rota.origem != routes[i+1].origem){
                origens.push(rota.origem);
            }
        }
    });
    return origens;
}