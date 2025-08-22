const dataElement = document.querySelector ('#data-atual') //date

const formatarData = () => {
    const agora = new Date(); //objeto com a data e hora atual

    //obtem e formata os componentes da data
    const dia = agora.getDate().toString().padStart(2, '0'); //dia do mes (01-31)
    const mes = (agora.getMonth() + 1).toString().padStart(2, '0'); //mes (01-12)
    const ano = agora.getFullYear(); // ano com 4 digitos

    return `${dia}/${mes}/${ano}`;
}

export const atualizarFooter = () => {
    dataElement.textContent = formatarData();
    setInterval(atualizarFooter, 1000);
}