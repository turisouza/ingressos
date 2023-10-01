
//criando a função comprar
function comprar() {
    //buscando os dados escolhidos pelo usuário
    // - O tipo do ingresso escolhido
    let tipo = document.getElementById("tipo-ingresso");
    // - A quantidade de ingressos escolhidos
    let qtd = parseInt(document.getElementById("qtd").value);

    //criando uma condicional para identificar o tipo de ingresso que foi escolhido e rodas a função correspondente puxando como parâmetro a quantidade
    if (tipo.value == "pista") {
        comprarPista(qtd);
    } else if (tipo.value == "superior") {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

//criando a função comprar ingresso da Pista
function comprarPista(qtd) {
    //Identificando a quantidade de ingressos escolhidas
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    //Criando uma condicional para caso a quantidade escolhida não esteja mais disponível
    if (qtd > qtdPista) {
        alert("Ingressos Indisponíveis")
    } else {
        //fazendo a diminuição da quantidade escolhida, da quantidade disponível
        qtdPista = qtdPista - qtd;
        //imprimindo no HTML a quantidade de ingressos restante
        document.getElementById("qtd-pista").textContent = qtdPista;
    }
}

//criando a função comprar ingresso da ala superior
function comprarSuperior(qtd) {
    //Identificando a quantidade de ingressos escolhidas
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    //Criando uma condicional para caso a quantidade escolhida não esteja mais disponível
    if (qtd > qtdSuperior) {
        alert("Ingressos Indisponíveis")
    } else {
        //fazendo a diminuição da quantidade escolhida, da quantidade disponível
        qtdSuperior = qtdSuperior - qtd;
        //imprimindo no HTML a quantidade de ingressos restante
        document.getElementById("qtd-superior").textContent = qtdSuperior;
    }
}

//criando a função comprar ingresso da ala inferior
function comprarInferior(qtd) {
    //Identificando a quantidade de ingressos escolhidas
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    //Criando uma condicional para caso a quantidade escolhida não esteja mais disponível
    if (qtd > qtdInferior) {
        alert("Ingressos Indisponíveis")
    } else {
        //fazendo a diminuição da quantidade escolhida, da quantidade disponível
        qtdInferior = qtdInferior - qtd;
        //imprimindo no HTML a quantidade de ingressos restante
        document.getElementById("qtd-inferior").textContent = qtdInferior;
    }
}
