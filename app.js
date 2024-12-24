function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value); 
    
    if (de >= ate) {
        alert(`Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!`);
        document.getElementById("quantidade").value = "";
        document.getElementById("de").value = "";
        document.getElementById("ate").value = "";
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert(`Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do Número" até o campo "Até o número". Verifique!`);
        document.getElementById("quantidade").value = "";
        document.getElementById("de").value = "";
        document.getElementById("ate").value = "";
        return;
    }
    
    let listaSorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (listaSorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
            alert("Tentando obter número inédito.");
        }

        listaSorteados.push(numero);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo" id="resultado">Números sorteados: ${listaSorteados}</label>`;
    
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");        
    } else {
        botao.classList.add("container__botao-desabilitado");
        botao.classList.remove("container__botao");
    }
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo" id="resultado">Números sorteados: nenhum até agora</label>`;
    alterarStatusBotao();
}


