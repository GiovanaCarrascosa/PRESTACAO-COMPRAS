import routes from "./dadosRota.js";

//Função para pegar o objeto inteiro da rota com base na origem e destino selecionados 
export function coletarDados(origem,destino){

    let rotaObj;
    routes.forEach(rota => {
        //Verifica se a origem e destinos são compativeis a rota verificada e ja coloca o objeto em uma variavel
        if(rota.origem == origem && rota.destino == destino){
            rotaObj = rota;
        }
    });

    //Devolve a rota (objeto inteiro,todos os seus atributos)
    return rotaObj;

}

