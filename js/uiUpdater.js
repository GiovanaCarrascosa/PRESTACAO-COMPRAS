import { coletarDados } from "./coletaDados.js";

export function atualizarListaViagem(origem,destino){
    const itensLista = document.querySelectorAll('ul li');
    const rota = coletarDados(origem,destino);

    const lista = [rota.distancia,rota.pedagios,rota.valorPedagios,rota.restaurantes,rota.tempoEstimado,rota.pontosTuristicos];

    itensLista.forEach((item,i)=>{
        item.textContent += lista[i];
    });
}