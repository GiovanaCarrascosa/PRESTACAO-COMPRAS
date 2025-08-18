import routes from "./dadosRota.js";

export function coletarDados(origem,destino){
    let rotaObj;
    routes.forEach(rota => {
        //console.log(rota.origem,origem,rota.destino,destino);
        if(rota.origem == origem && rota.destino == destino){
            rotaObj = rota;
        }
    });
    return rotaObj;
}

