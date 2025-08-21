import routes from "./dadosRota.js";

const botaoCalcular = document.querySelector('#btn-calcular')

// export function litrosNecessarios (distancia, consumo){
//     distancia = 430;
//     consumo = 10;

//     const resultado = distancia / consumo;

//     console.log(resultado)
// }

export function litrosNecessarios (){

    const consumo = parseFloat(document.querySelector('#consumo').value);

    let distanciaValor = 0;

    routes.find(
        rota => rota.origem === origem && rota.destino === destino
    );

    if (distanciaValor > 0 && consumo > 0) {
        const resultado = distanciaValor / consumo;
        console.log(resultado)
        return resultado;
    }
    else {
        return null;
    
    }

}

botaoCalcular.addEventListener('click', () => {
    calcularConsumo();
});
