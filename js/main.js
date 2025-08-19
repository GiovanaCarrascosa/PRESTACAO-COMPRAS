import { atualizarListaViagem,atualizarSelectOrigem,atualizarSelectDestino } from "./uiUpdater.js";


let selectOrigem = document.querySelector('#selectOrigem');
let selectDestino = document.querySelector('#selectDestino');


document.addEventListener('DOMContentLoaded',()=>{
    selectOrigem.addEventListener('input', ()=>{
        selectOrigem = document.querySelector('#selectOrigem');
        atualizarSelectDestino(selectOrigem.value);
    });
    selectDestino.addEventListener('input', ()=>{
        selectOrigem = document.querySelector('#selectOrigem');
        selectDestino = document.querySelector('#selectDestino');
        atualizarListaViagem(selectOrigem.value,selectDestino.value);
    });
    atualizarSelectOrigem();
});
