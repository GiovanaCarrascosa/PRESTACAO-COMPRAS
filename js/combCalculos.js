// função para calcular os litros necessarios
export function litrosNecessarios(distancia, consumo) {
    // validação para fazer o calculo se os valores forem maiores que 0
    if (distancia > 0 && consumo > 0) {
        const resultado = distancia / consumo;
        return resultado;
    } else {
        return null;
    }
}

// função para calcular o custo total de combustivel
export function custoTotal(distancia, consumo, preco) { 
    // validação para fazer o calculo se os valores forem maiores que 0
    if (distancia > 0 && consumo > 0) {
        const resultado = (distancia / consumo) * preco;
        return resultado;
    } else {
        return null;
    }
}

// função para calcular o custo total da viagem
export function totalViagem(custoTotal, alimentacao, pedagio) { 
    // validação para fazer o calculo se os valores forem maiores que 0
    if (custoTotal > 0 && alimentacao > 0 && pedagio >= 0) {
        const resultado = custoTotal + alimentacao + pedagio;
        return resultado;
    } else {
        return null;
    }
}